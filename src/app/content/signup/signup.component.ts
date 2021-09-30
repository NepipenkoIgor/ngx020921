import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'ngx-classwork-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
	public constructor(private readonly router: Router) {}

	public goToLogin() {
		this.router.navigate(['/login']);
	}
}
