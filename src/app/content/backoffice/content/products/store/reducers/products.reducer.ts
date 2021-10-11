import { Action, createReducer, on } from '@ngrx/store';
import { getProductsSuccess } from '../actions/products.actions';
import { IProduct } from '../../products.service';

export interface IProductsState {
	products: IProduct[];
}

export const initialState: IProduct[] = [];

const _productReducer = createReducer(
	initialState,
	on(getProductsSuccess, (_state, { products }) => {
		return products;
	}),
);

export function productReducer(state: IProduct[] | undefined, action: Action) {
	return _productReducer(state, action);
}
