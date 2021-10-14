import { Component, Injector, Input } from '@angular/core';
import { ModalService } from '../../../../../modal/modal.service';
import { IProduct } from '../products.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../../store';
import { ICartState } from '../../../store/reducers/cart.reducer';
import { addProductToCart } from '../../../store/actions/cart.actions';

@Component({
	selector: 'ngx-classwork-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
	@Input()
	public product: IProduct = {} as IProduct;

	@Input()
	public isOdd!: boolean;

	public constructor(
		private readonly modalService: ModalService,
		private readonly injector: Injector,
		private readonly store: Store<IAppState & ICartState & IProduct>,
	) {}

	public async addToCart() {
		const m: any = await import(
			'./product-confirmation-modal/product-confirmation-modal.component'
		);
		console.log(m.ProductConfirmationModalComponent);
		this.modalService.open({
			component: m.ProductConfirmationModalComponent,
			context: {
				product: { ...this.product },
				injector: this.injector,
				add: () => {
					console.log('Add');
					this.store.dispatch(addProductToCart({ product: { ...this.product } }));
					this.modalService.close();
				},
				cancel: () => {
					console.log('Close');
					this.modalService.close();
				},
			},
		});
	}
}
