import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store';
import { loginPending } from '../../store/actions/auth.actions';

@Component({
	selector: 'ngx-classwork-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	public constructor(private readonly store: Store<IAppState>) {}

	public login(user: { username: string; password: string }) {
		this.store.dispatch(loginPending(user));
	}
}
