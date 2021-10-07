import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Injectable()
export class ValidatorsService {
	public constructor(private readonly http: HttpClient) {}

	public validateWithoutSpecial(control: AbstractControl): ValidationErrors | null {
		const valid = /^[a-zA-Z]*$/.test(control.value);
		return valid
			? null
			: {
					withOutSpecial: 'Field should be without special symbols. $,% ........',
			  };
	}

	public equalField(control: FormGroup): ValidationErrors | null {
		const { pass, cpass } = control.value;
		return pass === cpass
			? null
			: {
					noEqual: 'Fields no equal',
			  };
	}

	public uniqueName({ value: username }: FormGroup): Observable<ValidationErrors | null> {
		return of(username).pipe(
			delay(500),
			switchMap(() => {
				return this.http.post('/auth/checkUsername', { username });
			}),
		);
	}
}
