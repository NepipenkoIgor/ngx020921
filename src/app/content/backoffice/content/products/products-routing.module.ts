import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { OneProductComponent } from './one-product/one-product.component';
import { OneProductResolver } from './one-product/one-product.resolver';

export const routes: Routes = [
	{
		path: '',
		component: ProductsComponent,
	},
	{
		path: ':id',
		component: OneProductComponent,
		resolve: {
			product: OneProductResolver,
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductsRoutingModule {}
