import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../products.service';

export const getProductsPending = createAction('[Products] get pending');
export const getProductsSuccess = createAction(
	'[Products] get success',
	props<{ products: IProduct[] }>(),
);
