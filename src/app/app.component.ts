import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { UnSubscribeMixin, UnSubscriber } from './utils/unsubscriber';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IProduct, ProductsService } from './products.service';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent extends UnSubscribeMixin(UnSubscriber) {
	public text: string = 'Ngx020921';

	public searchTerm!: string;

	public isFavorite: boolean = false;

	public products$: Observable<IProduct[]> = this.productsService.getProducts();

	//public products: IProduct[] = [];

	public sideNav!: MatSidenav;

	// public constructor(@Inject(ProductsService) private productsService: any) {
	public constructor(private productsService: ProductsService) {
		super();
	}

	public ngOnInit(): void {
		this.productsService.getProducts().subscribe(
			(v: any) => {
				console.log(v);
			},
			() => {},
			() => {
				console.log('COMPLETED');
			},
		);
	}

	public override ngOnDestroy() {
		//do something
		super.ngOnDestroy();
	}

	public toggleMenu(event: any) {
		console.log('menu !!!', event);
	}

	public setText(text: string) {
		this.searchTerm = text;
	}

	public onSetSideNav(sideNav: MatSidenav): void {
		this.sideNav = sideNav;
	}

	public toggleIsFavorite(e: MatCheckboxChange): void {
		this.isFavorite = e.checked;
	}

	// public filteredProducts(products: IProduct[], text: string) {
	// 	console.log('CALC');
	// 	if (!text) {
	// 		return products;
	// 	}
	// 	return products.filter((p: IProduct) => `${p.title} ${p.price}`.toLowerCase().includes(text));
	// }
}
