import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export interface IRouterPayload {
	path: string[];
	query?: object;
	extras?: NavigationExtras;
}

export const go = createAction('[Router] go', props<{ params: IRouterPayload }>());
export const back = createAction('[Auth] back');
export const forward = createAction('[Auth] forward');
