import {
	HttpClientTestingModule,
	HttpTestingController,
	TestRequest,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { BASE_URL } from '../../config';
import { environment } from '../../../environments/environment';
import { inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
const accessToken: string = '1111aaa111';

class TestAuthService extends AuthService {
	public override getTokenFromLocalStorage(): Observable<string | null> {
		return of(accessToken);
	}
}

describe('Auth interceptor', () => {
	let httpMock: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				{
					provide: AuthService,
					useClass: TestAuthService,
				},
				{
					provide: HTTP_INTERCEPTORS,
					useClass: AuthInterceptor,
					multi: true,
				},
				{
					provide: BASE_URL,
					useValue: environment.baseUrl,
				},
			],
		});

		httpMock = TestBed.inject(HttpTestingController);
		localStorage.setItem('accessToken', accessToken);
	});

	it('should have auth header', inject(
		[AuthService, BASE_URL],
		(authService: AuthService, baseUrl: string) => {
			const url = `${baseUrl}/auth/checkuser`;
			authService.checkUser().subscribe();
			const httpRequest: TestRequest = httpMock.expectOne({
				method: 'GET',
				url,
			});
			expect(httpRequest.request.headers.has('Authorization')).toBeTruthy();
			expect(httpRequest.request.headers.get('Authorization')).toEqual(`Bearer ${accessToken}`);
		},
	));
});
