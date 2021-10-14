import { authReducer, IAuthState } from './reducers/auth.reducer';
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import * as fromRouter from '@ngrx/router-store';
import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { logOut } from './actions/auth.actions';

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

export function logoutAndClearState(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
	return (state: IAppState | undefined, action: Action): IAppState => {
		let newState = state;
		if (action.type === logOut().type) {
			newState = undefined;
		}
		return reducer(newState, action);
	};
}

export const metaReducers: MetaReducer<IAppState>[] = [logoutAndClearState];
