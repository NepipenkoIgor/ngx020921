import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BackofficeComponent } from './backoffice.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { BackofficeRoutingModule } from './backoffice-routing.module';

@NgModule({
	declarations: [
		BackofficeComponent,
		HeaderComponent,
		SidenavComponent,
		ExchangeRatesComponent,
		ExchangeRatesDirective,
		HiddenDirective,
	],
	imports: [SharedModule, BackofficeRoutingModule],
})
export class BackofficeModule {}
