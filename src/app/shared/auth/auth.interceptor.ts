import { Inject, Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpHeaders,
	HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../config';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	public constructor(
		@Inject(BASE_URL) private baseUrl: string,
		private readonly authService: AuthService,
	) {}

	public intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler,
	): Observable<HttpEvent<unknown>> {
		return this.authService.getTokenFromLocalStorage().pipe(
			switchMap((accessToken: string | null) => {
				const headers: HttpHeaders = request.headers
					.append('Content-Type', 'application/json')
					.append('Authorization', `Bearer ${accessToken}`);
				const jsonReq = request.clone({
					url: `${this.baseUrl}${request.url}`,
					headers,
				});
				return next.handle(jsonReq).pipe(
					filter((e: HttpEvent<any>): e is HttpResponse<any> => {
						return e instanceof HttpResponse;
					}),
					map((res: HttpResponse<any>) => {
						return res.clone({ body: res.body && res.body.data });
					}),
				);
			}),
		);
	}
}
