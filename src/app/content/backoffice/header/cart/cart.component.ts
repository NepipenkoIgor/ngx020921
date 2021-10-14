import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../store';
import {
	ICartProduct,
	ICartState,
	productsWithRightPriceAndBonuses,
} from '../../store/reducers/cart.reducer';
import { changeProductCountInCart, removeProductFromCart } from '../../store/actions/cart.actions';

@Component({
	selector: 'ngx-classwork-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css'],
})
export class CartComponent {
	public products$ = this.store.select(productsWithRightPriceAndBonuses);

	public constructor(private readonly store: Store<IAppState & ICartState>) {}

	public changeCount(event: { _id: string; count: number }) {
		this.store.dispatch(changeProductCountInCart(event));
	}

	public remove(event: { _id: string }) {
		this.store.dispatch(removeProductFromCart(event));
	}

	public trackByFn(_index: number, item: ICartProduct): string {
		return item._id;
	}
}
