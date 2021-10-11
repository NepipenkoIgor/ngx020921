import { getProductsPending, getProductsSuccess } from '../actions/products.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { IProduct, ProductsService } from '../../products.service';

@Injectable()
export class ProductsEffect {
	public getProductsPending$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getProductsPending),
			switchMap(() =>
				this.productsService.getProducts().pipe(
					map((products: IProduct[]) => getProductsSuccess({ products })),
					catchError(() => EMPTY),
				),
			),
		),
	);

	public constructor(
		private readonly actions$: Actions,
		private readonly productsService: ProductsService,
	) {}
}
