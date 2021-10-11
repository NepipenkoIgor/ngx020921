import { createAction, props } from '@ngrx/store';

export const checkJWT = createAction('[Auth] check JWT');
export const logOut = createAction('[Auth] log out');
export const authFail = createAction('[Auth] fail');
export const loginPending = createAction(
	'[Auth] log in',
	props<{ username: string; password: string }>(),
);

export const setUser = createAction('[Auth] set user', props<{ user: any }>());

export const signUpPending = createAction('[Auth] sign up', props<{ user: any }>());
