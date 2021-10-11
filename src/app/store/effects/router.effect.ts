import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { back, go } from '../actions/router.actions';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class RouterEffect {
	public go$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(go),
				tap(({ params: { path, extras, query: queryParams } }) => {
					this.router.navigate(path, { queryParams, ...extras });
				}),
			),
		{ dispatch: false },
	);

	public back$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(back),
				tap(() => {
					this.location.back();
				}),
			),
		{ dispatch: false },
	);

	public forward$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(back),
				tap(() => {
					this.location.forward();
				}),
			),
		{ dispatch: false },
	);

	public constructor(
		private readonly actions$: Actions,
		private readonly router: Router,
		private readonly location: Location,
	) {}
}
