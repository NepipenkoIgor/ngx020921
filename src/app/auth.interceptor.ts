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
import { BASE_URL } from './config';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	public constructor(@Inject(BASE_URL) private baseUrl: string) {}

	public intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler,
	): Observable<HttpEvent<unknown>> {
		const headers: HttpHeaders = request.headers
			.append('Content-Type', 'application/json')
			.append(
				'Authorization',
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE2MzIxNTkyOTF9.wMvFbm8gjBCiAm07fy1PXyEixl0tQC6cSlm_jz0E0Zk',
			);
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
	}
}
