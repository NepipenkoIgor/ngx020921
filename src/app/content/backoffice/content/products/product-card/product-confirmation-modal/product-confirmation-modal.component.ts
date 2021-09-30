import { Component, Input, NgModule, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { IProduct } from '../../products.service';

@Component({
	selector: 'ngx-classwork-product-confirmation-modal',
	templateUrl: './product-confirmation-modal.component.html',
	styleUrls: ['./product-confirmation-modal.component.css'],
})
export class ProductConfirmationModalComponent implements OnDestroy {
	@Input()
	public product!: IProduct;

	@Input()
	public add!: Function;

	@Input()
	public cancel!: Function;

	public ngOnDestroy() {
		console.log('DESTROYED');
	}
}

@NgModule({
	declarations: [ProductConfirmationModalComponent],
	imports: [MatButtonModule, MatCardModule, CommonModule],
})
export class ProductConfirmationModalModule {}
