import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../products.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class OneProductResolver implements Resolve<IProduct | null> {
	public constructor(private readonly http: HttpClient, private readonly router: Router) {}

	public resolve(
		route: ActivatedRouteSnapshot,
		_state: RouterStateSnapshot,
	): Observable<IProduct | null> {
		return this.http.get<IProduct>(`/products/${route.paramMap.get('id')}`).pipe(
			map((product: IProduct | null) => {
				if (!product) {
					this.router.navigate(['/backoffice']);
				}
				return product;
			}),
			catchError(() => {
				this.router.navigate(['/backoffice']);
				return of(null);
			}),
		);
	}
}
