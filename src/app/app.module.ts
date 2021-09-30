import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BASE_URL } from './config';
import { AuthInterceptor } from './auth.interceptor';
import { ModalModule } from './modal/modal.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent],
	providers: [
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
			useFactory: (baseUrl: string, httpClient: any) => {
				return () => {
					console.log('@@@', baseUrl, httpClient);
				};
			},
			deps: [BASE_URL, HttpClient],
			multi: true,
		},
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,
		HttpClientModule,
		ModalModule.forRoot(),
		AppRoutingModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
