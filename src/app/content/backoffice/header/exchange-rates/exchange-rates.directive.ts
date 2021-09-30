import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export interface IRate {
	value: number;
	currency: string;
}

export enum Autoplay {
	OFF = 'off',
	ON = 'on',
}

@Directive({
	selector: '[ngxClassworkExchangeRates]',
})
export class ExchangeRatesDirective implements OnInit {
	/* eslint @angular-eslint/no-input-rename: off*/
	@Input('ngxClassworkExchangeRatesFrom')
	public rates: IRate[] = [];

	@Input('ngxClassworkExchangeRatesAutoplay')
	public mode: Autoplay = Autoplay.ON;

	@Input('ngxClassworkExchangeRatesDelay')
	public ms: number = 1000;

	private context: any;

	private index: number = 0;

	private intervalId: number | null = null;

	public constructor(private tmpl: TemplateRef<any>, private vcr: ViewContainerRef) {}

	public ngOnInit() {
		this.context = {
			$implicit: this.rates[this.index],
			controller: {
				next: () => this.next(),
				prev: () => this.prev(),
			},
		};
		this.vcr.createEmbeddedView(this.tmpl, this.context);
		this.resetInterval();
	}

	private next() {
		this.resetInterval();
		this.index++;
		if (this.index >= this.rates.length) {
			this.index = 0;
		}
		this.context.$implicit = this.rates[this.index];
	}

	private prev() {
		this.resetInterval();
		this.index--;
		if (this.index < 0) {
			this.index = this.rates.length - 1;
		}
		this.context.$implicit = this.rates[this.index];
	}

	private resetInterval() {
		if (this.mode === Autoplay.OFF) {
			return;
		}
		this.clearInterval().initInterval();
	}

	private initInterval() {
		this.intervalId = setInterval(() => {
			this.next();
		}, this.ms);
	}

	private clearInterval(): ExchangeRatesDirective {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
		return this;
	}
}
