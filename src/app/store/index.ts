import { authReducer, IAuthState } from './reducers/auth.reducer';
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import * as fromRouter from '@ngrx/router-store';

export interface IAppState {
	auth: IAuthState;
	router: fromRouter.RouterReducerState<IRouterStateUrl>;
}

export const reducers = {
	auth: authReducer,
	router: fromRouter.routerReducer,
};

export interface IRouterStateUrl {
	url: string;
	params: Params;
	queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<IRouterStateUrl> {
	public serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
		const {
			url,
			root: { queryParams },
		} = routerState;

		let state: ActivatedRouteSnapshot = routerState.root;

		while (state.firstChild) {
			state = state.firstChild;
		}
		const { params } = state;
		return { url, params, queryParams };
	}
}
