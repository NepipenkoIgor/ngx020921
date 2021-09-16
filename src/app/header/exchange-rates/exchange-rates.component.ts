import { Component } from '@angular/core';
import { Autoplay, IRate } from './exchange-rates.directive';

@Component({
	selector: 'ngx-classwork-exchange-rates',
	templateUrl: './exchange-rates.component.html',
	styleUrls: ['./exchange-rates.component.css'],
})
export class ExchangeRatesComponent {
	public mode: Autoplay = Autoplay.OFF;

	public rates: IRate[] = [
		{
			value: 1,
			currency: 'USD',
		},
		{
			value: 44,
			currency: 'EUR',
		},
		{
			value: 100,
			currency: 'RUB',
		},
	];
}
