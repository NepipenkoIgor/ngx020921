import { Component, Injector, Input } from '@angular/core';
import { IProduct } from '../products.service';
import { ModalService } from '../modal/modal.service';

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
	) {}

	public async addToCart() {
		const m: any = await import(
			'../product-confirmation-modal/product-confirmation-modal.component'
		);
		console.log(m.ProductConfirmationModalComponent);
		this.modalService.open({
			component: m.ProductConfirmationModalComponent,
			context: {
				product: { ...this.product },
				injector: this.injector,
				add: () => {
					console.log('Add');
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
