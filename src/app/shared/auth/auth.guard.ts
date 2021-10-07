import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
	public constructor(private readonly router: Router) {}

	public canActivate(
		_route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> {
		const { url } = state;
		return of(false).pipe(
			switchMap((isLogged) => {
				if (!isLogged && (url === '/login' || url === '/signup')) {
					return of(!isLogged);
				}
				if (isLogged && (url === '/login' || url === '/signup')) {
					this.router.navigate(['/backoffice']);
					return of(!isLogged);
				}
				if (!isLogged) {
					this.router.navigate(['/login']);
				}
				return of(isLogged);
			}),
		);
	}
}
