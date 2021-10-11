import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { authFail, checkJWT, loginPending, setUser } from '../actions/auth.actions';
import { AuthService } from '../../shared/auth/auth.service';
import { IUser } from '../reducers/auth.reducer';
import { go } from '../actions/router.actions';

@Injectable()
export class AuthEffect {
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
			switchMap((user) =>
				this.authService.login(user).pipe(
					switchMap((userWithData: IUser) => this.authService.tokenToLocalStorage(userWithData)),
					mergeMap((userWithData: IUser | null) => [
						setUser({ user: userWithData }),
						go({ params: { path: ['backoffice'] } }),
					]),
					catchError(() => of(authFail())),
				),
			),
		),
	);

	public constructor(
		private readonly actions$: Actions,
		private readonly authService: AuthService,
	) {}
}
