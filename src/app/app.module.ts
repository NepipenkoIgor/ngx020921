import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { environment } from '../environments/environment';
import { BASE_URL } from './config';
import { AuthInterceptor } from './auth.interceptor';
import { ModalModule } from './modal/modal.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SearchComponent,
		SidenavComponent,
		ProductCardComponent,
		ProductsFilterPipe,
		ExchangeRatesComponent,
		ExchangeRatesDirective,
		HiddenDirective,
		LoginComponent,
		SignupComponent,
		BackofficeComponent,
	],
	providers: [
		{
			provide: ProductsService,
			useClass: ProductsService,
		},
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
