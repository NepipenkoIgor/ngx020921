import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';
import { PreloadStrategyService } from './preload-strategy.service';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'backoffice',
		pathMatch: 'full',
	},
	{
		path: 'login',
		loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
		canActivate: [AuthGuard],
	},
	{
		path: 'signup',
		loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule),
		canActivate: [AuthGuard],
	},
	{
		path: 'backoffice',
		loadChildren: () =>
			import('./content/backoffice/backoffice.module').then((m) => m.BackofficeModule),
		canActivate: [AuthGuard],
	},
	{
		path: '**',
		redirectTo: 'backoffice',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadStrategyService })],
	exports: [RouterModule],
	providers: [PreloadStrategyService],
})
export class AppRoutingModule {}
