import { Action, createReducer, on } from '@ngrx/store';
import { authFail, checkJWT, loginPending, setUser, signUpPending } from '../actions/auth.actions';

export interface IAuthState {
	isLoggedIn: boolean;
	loading: boolean;
	user: IUser;
}

export interface IUser {
	_id: string;
	username: string;
	accessToken: string;
}

export const initialState: IAuthState = {} as IAuthState;

const _authReducer = createReducer(
	initialState,
	on(checkJWT, (state) => {
		return { ...state, loading: true };
	}),
	on(loginPending, (state) => {
		return { ...state, loading: true };
	}),
	on(signUpPending, (state) => {
		return { ...state, loading: true };
	}),
	on(authFail, (state) => {
		return { ...state, loading: false };
	}),
	on(setUser, (state, { user }) => {
		return { ...state, loading: false, isLoggedIn: true, user };
	}),
);

export function authReducer(state: IAuthState | undefined, action: Action) {
	return _authReducer(state, action);
}
