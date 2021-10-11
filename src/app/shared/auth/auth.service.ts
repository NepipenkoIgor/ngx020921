import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../store/reducers/auth.reducer';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
	public constructor(private readonly http: HttpClient) {}

	public login(user: { username: string; password: string }): Observable<IUser> {
		return this.http.post<IUser>('/auth/signin', { ...user });
	}

	public checkUser(): Observable<IUser> {
		return this.http.get<IUser>('/auth/checkuser');
	}

	public tokenToLocalStorage(user: IUser) {
		if (!user || !user.accessToken) {
			return of(null);
		}
		localStorage.setItem('accessToken', user.accessToken);
		return of(user);
	}

	public getTokenFromLocalStorage() {
		return of(localStorage.getItem('accessToken'));
	}
}
