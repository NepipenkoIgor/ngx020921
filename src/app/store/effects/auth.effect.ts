import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of, pipe } from 'rxjs';
import {
	authFail,
	checkJWT,
	loginPending,
	logOut,
	setUser,
	signUpPending,
} from '../actions/auth.actions';
import { AuthService } from '../../shared/auth/auth.service';
import { IUser } from '../reducers/auth.reducer';
import { go } from '../actions/router.actions';

@Injectable()
export class AuthEffect {
	public logoutEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(logOut),
			switchMap(() =>
				this.authService.removeTokenFromLocalStorage().pipe(
					map(() => go({ params: { path: ['login'] } })),
					catchError(() => of(authFail())),
				),
			),
		),
	);

	public checkJwtEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(checkJWT),
			switchMap(() =>
				this.authService.checkUser().pipe(
					map((userWithData: IUser) => setUser({ user: userWithData })),
					catchError(() => of(authFail())),
				),
			),
		),
	);

	public loginEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loginPending),
			switchMap((user) => this.authService.login(user).pipe(this.setUser())),
		),
	);

	public signupEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(signUpPending),
			switchMap(({ user }) => this.authService.signUp(user).pipe(this.setUser())),
		),
	);

	private setUser() {
		return pipe(
			switchMap((userWithData: IUser) => this.authService.tokenToLocalStorage(userWithData)),
			mergeMap((userWithData: IUser | null) => [
				setUser({ user: userWithData }),
				go({ params: { path: ['backoffice'] } }),
			]),
			catchError(() => of(authFail())),
		);
	}

	public constructor(
		private readonly actions$: Actions,
		private readonly authService: AuthService,
	) {}
}
