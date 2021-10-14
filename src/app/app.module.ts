import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BASE_URL } from './config';
import { AuthInterceptor } from './shared/auth/auth.interceptor';
import { ModalModule } from './modal/modal.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/auth/auth.guard';
import { Store, StoreModule } from '@ngrx/store';
import { IAppState, metaReducers, reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { checkJWT } from './store/actions/auth.actions';
import { effects } from './store/effects';

@NgModule({
	declarations: [AppComponent],
	providers: [
		AuthGuard,
		{
			provide: BASE_URL,
			useValue: environment.baseUrl,
			// multi: true,
		},
		{
			provide: 'BASE_URL',
			useValue: 'http://localhost:3000',
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: APP_INITIALIZER,
			useFactory: (store: Store<IAppState>) => {
				return () => {
					store.dispatch(checkJWT());
				};
			},
			deps: [Store],
			multi: true,
		},
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule.forRoot(),
		HttpClientModule,
		ModalModule.forRoot(),
		AppRoutingModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot(effects),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
			autoPause: true, // Pauses recording actions and state changes when the extension window is not open
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
