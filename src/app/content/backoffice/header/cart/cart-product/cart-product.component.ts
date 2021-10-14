import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../../store/reducers/cart.reducer';

@Component({
	selector: 'ngx-classwork-cart-product',
	templateUrl: './cart-product.component.html',
	styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent {
	@Input()
	public product!: ICartProduct;

	@Output()
	public changeProductCount = new EventEmitter<{ _id: string; count: number }>();

	@Output()
	public removeProduct = new EventEmitter<{ _id: string }>();

	public remove() {
		this.removeProduct.emit({ _id: this.product._id });
	}

	public changeCount(isIncrement = false) {
		if (isIncrement) {
			this.changeProductCount.emit({ _id: this.product._id, count: this.product.count + 1 });
			return;
		}
		if (this.product.count === 1) {
			this.remove();
			return;
		}
		this.changeProductCount.emit({ _id: this.product._id, count: this.product.count - 1 });
	}
}
