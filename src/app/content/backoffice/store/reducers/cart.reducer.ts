import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IProduct } from '../../content/products/products.service';
import {
	addProductToCart,
	changeProductCountInCart,
	removeProductFromCart,
} from '../actions/cart.actions';
import { IUser, userSelector } from '../../../../store/reducers/auth.reducer';

export interface ICartState {
	cart: EntityState<ICartProduct>;
}

export interface ICartProduct extends IProduct {
	count: number;
}

export const cartAdapter: EntityAdapter<ICartProduct> = createEntityAdapter({
	selectId: (product: ICartProduct) => product._id,
});

export const initialState: EntityState<ICartProduct> = cartAdapter.getInitialState();

const _cartReducer = createReducer(
	initialState,
	on(addProductToCart, (state, { product }) => {
		const entity: ICartProduct | undefined = state.entities[product._id];
		return cartAdapter.upsertOne(
			{
				...product,
				count: entity?.count ? entity.count + 1 : 1,
			},
			state,
		);
	}),
	on(removeProductFromCart, (state, { _id }) => {
		return cartAdapter.removeOne(_id, state);
	}),
	on(changeProductCountInCart, (state, { _id, count }) => {
		return cartAdapter.updateOne(
			{
				id: _id,
				changes: { count },
			},
			state,
		);
	}),
);

export function cartReducer(state: EntityState<ICartProduct> | undefined, action: Action) {
	return _cartReducer(state, action);
}

export const { selectAll } = cartAdapter.getSelectors(createFeatureSelector('cart'));

export const trueProductsCount = createSelector(selectAll, (products: ICartProduct[]) => {
	return products.reduce((count: number, product: ICartProduct) => {
		const newCount = count + product.count;
		return newCount;
	}, 0);
});

export const productsWithRightPrice = createSelector(selectAll, (products: ICartProduct[]) => {
	return products.map((product: ICartProduct) => {
		return { ...product, price: Math.round(product.count * product.price) };
	}, 0);
});

export const productsWithRightPriceAndBonuses = createSelector(
	productsWithRightPrice,
	userSelector,
	(products: ICartProduct[], user: IUser) => {
		return products.map((product: ICartProduct) => {
			return { ...product, price: Math.round(product.price * user.bonuses) };
		}, 0);
	},
);
