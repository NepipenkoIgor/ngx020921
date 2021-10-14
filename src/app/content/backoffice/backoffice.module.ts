import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BackofficeComponent } from './backoffice.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { CartComponent } from './header/cart/cart.component';
import { CartProductComponent } from './header/cart/cart-product/cart-product.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/reducers/cart.reducer';

@NgModule({
	declarations: [
		BackofficeComponent,
		HeaderComponent,
		SidenavComponent,
		ExchangeRatesComponent,
		ExchangeRatesDirective,
		HiddenDirective,
		CartComponent,
		CartProductComponent,
	],
	imports: [SharedModule, BackofficeRoutingModule, StoreModule.forFeature('cart', cartReducer)],
})
export class BackofficeModule {}
