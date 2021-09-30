import { Directive, HostBinding } from '@angular/core';

@Directive({
	selector: '[ngxClassworkHidden]',
	exportAs: 'cwHidden',
})
export class HiddenDirective {
	@HostBinding('style.visibility')
	public visibility: 'visible' | 'hidden' = 'hidden';

	public show() {
		this.visibility = 'visible';
	}

	public hide() {
		this.visibility = 'hidden';
	}
}
