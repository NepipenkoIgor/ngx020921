import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { UnSubscriber } from '../../../../utils/unsubscriber';
import { IProduct } from './products.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../store';
import { IProductsState } from './store/reducers/products.reducer';
import { getProductsPending } from './store/actions/products.actions';

@Component({
	selector: 'ngx-classwork-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
})
export class ProductsComponent extends UnSubscriber implements OnInit {
	public searchTerm!: string;

	public isFavorite: boolean = false;

	public products$: Observable<IProduct[]> = this.store.select('products');

	public title$ = this.activatedRoute.data.pipe(pluck('title'));

	public constructor(
		private activatedRoute: ActivatedRoute,
		private store: Store<IAppState & IProductsState>,
	) {
		super();
	}

	public ngOnInit() {
		this.store.dispatch(getProductsPending());
	}

	public setText(text: string) {
		this.searchTerm = text;
	}

	public toggleIsFavorite(e: MatCheckboxChange): void {
		this.isFavorite = e.checked;
	}
}
