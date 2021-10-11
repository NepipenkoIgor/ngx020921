import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { IAppState } from '../../store';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthGuard implements CanActivate {
	public constructor(private readonly router: Router, private readonly store: Store<IAppState>) {}

	public canActivate(
		_route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> {
		const { url } = state;
		return this.store.select('auth').pipe(
			filter(({ loading }) => !loading),
			take(1),
			switchMap(({ isLoggedIn }) => {
				if (!isLoggedIn && (url === '/login' || url === '/signup')) {
					return of(!isLoggedIn);
				}
				if (isLoggedIn && (url === '/login' || url === '/signup')) {
					this.router.navigate(['/backoffice']);
					return of(!isLoggedIn);
				}
				if (!isLoggedIn) {
					this.router.navigate(['/login']);
				}
				return of(isLoggedIn);
			}),
		);
	}
}
