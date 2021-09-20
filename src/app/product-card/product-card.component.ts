import { Component, Input } from '@angular/core';
import { IProduct } from '../products.service';

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

	// public constructor(@Optional() @Host() private productsService: ProductsService) {
	// 	console.log(this.productsService?.timestamp);
	// }
}
