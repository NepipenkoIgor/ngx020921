import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../shared/validators/validators.service';

@Component({
	selector: 'ngx-classwork-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
	public signUpForm = this.fb.group({
		username: [
			'inep',
			[Validators.required, Validators.minLength(4), this.validatorsService.validateWithoutSpecial],
			[this.validatorsService.uniqueName.bind(this.validatorsService)],
		],
		emails: this.fb.array([['', [Validators.required]]]),
		male: [false],
		password: this.fb.group(
			{
				pass: ['', [Validators.required]],
				cpass: ['', [Validators.required]],
			},
			{ validators: [this.validatorsService.equalField] },
		),
	});

	public constructor(
		private readonly router: Router,
		private readonly fb: FormBuilder,
		private readonly validatorsService: ValidatorsService,
	) {}

	public goToLogin() {
		this.router.navigate(['/login']);
	}

	public signup() {
		console.log(this.signUpForm.value);
	}

	public getControls(control: AbstractControl, path: string): AbstractControl[] {
		return (control.get(path) as FormArray).controls;
	}

	public addEmail(): void {
		(this.signUpForm.get('emails') as FormArray).push(this.fb.control('', [Validators.required]));
	}

	public removeEmail(index: number): void {
		(this.signUpForm.get('emails') as FormArray).removeAt(index);
	}
}
