import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'backoffice',
		pathMatch: 'full',
	},
	{
		path: 'login',
		loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
	},
	{
		path: 'signup',
		loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule),
	},
	{
		path: 'backoffice',
		loadChildren: () =>
			import('./content/backoffice/backoffice.module').then((m) => m.BackofficeModule),
	},
	{
		path: '**',
		redirectTo: 'backoffice',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
