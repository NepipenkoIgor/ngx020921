import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'ngx-classwork-switcher',
	templateUrl: './switcher.component.html',
	styleUrls: ['./switcher.component.css'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: SwitcherComponent,
			multi: true,
		},
	],
})
export class SwitcherComponent implements ControlValueAccessor {
	public checked = false;

	private onChangeCb!: (checked: boolean) => void;

	@HostListener('click')
	public toggle(): void {
		this.checked = !this.checked;
		this.onChangeCb(this.checked);
	}

	public writeValue(checked: boolean) {
		this.checked = checked;
	}

	public registerOnChange(fn: any) {
		this.onChangeCb = fn;
	}

	public registerOnTouched(_fn: any) {}
}
