import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';

export const routes: Routes = [
	{
		path: '',
		component: BackofficeComponent,
		children: [
			{
				path: 'products',
				loadChildren: () =>
					import('./content/products/products.module').then((m) => m.ProductsModule),
				data: {
					title: 'Products Page',
				},
			},
			{
				path: 'profile',
				loadChildren: () => import('./content/profile/profile.module').then((m) => m.ProfileModule),
			},
			{
				path: '**',
				redirectTo: 'products',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BackofficeRoutingModule {}
