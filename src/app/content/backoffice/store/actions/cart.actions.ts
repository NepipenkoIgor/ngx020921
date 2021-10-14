import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../content/products/products.service';

export const addProductToCart = createAction('[Cart] add product', props<{ product: IProduct }>());
export const removeProductFromCart = createAction(
	'[Cart] remove product',
	props<{ _id: string }>(),
);
export const changeProductCountInCart = createAction(
	'[Cart] change count product',
	props<{ _id: string; count: number }>(),
);
