import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { UnSubscriber } from '../../../../utils/unsubscriber';
import { IProduct, ProductsService } from './products.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
	selector: 'ngx-classwork-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
})
export class ProductsComponent extends UnSubscriber implements OnInit {
	public searchTerm!: string;

	public isFavorite: boolean = false;

	public products$: Observable<IProduct[]> = this.productsService.getProducts();

	public title$ = this.activatedRoute.data.pipe(pluck('title'));

	public constructor(
		private productsService: ProductsService,
		private activatedRoute: ActivatedRoute,
	) {
		super();
	}

	public ngOnInit() {
		console.log(this.activatedRoute.snapshot);
	}

	public setText(text: string) {
		this.searchTerm = text;
	}

	public toggleIsFavorite(e: MatCheckboxChange): void {
		this.isFavorite = e.checked;
	}
}
