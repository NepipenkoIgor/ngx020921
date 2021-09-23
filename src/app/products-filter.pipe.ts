import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products.service';

@Pipe({
	name: 'productsFilter',
	pure: false,
})
export class ProductsFilterPipe implements PipeTransform {
	public transform(products: IProduct[], text: string, isFavorite: boolean = false) {
		let result = products;
		if (isFavorite) {
			result = result.filter((p: IProduct) => p.isFavorite);
		}
		if (!text) {
			return result;
		}
		return result.filter((p: IProduct) => `${p.title} ${p.price}`.toLowerCase().includes(text));
	}
}
