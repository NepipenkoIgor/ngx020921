import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ValidatorsService } from './validators.service';

@Directive({
	selector: '[ngxClassworkWithoutSpecialCharacters]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: WithoutSpecialCharactersDirective,
			multi: true,
		},
	],
})
export class WithoutSpecialCharactersDirective implements Validator {
	public constructor(private readonly validatorsService: ValidatorsService) {}

	public validate(control: FormControl): ValidationErrors | null {
		return this.validatorsService.validateWithoutSpecial(control);
	}
}
