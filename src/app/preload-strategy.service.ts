import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, filter, mergeMap } from 'rxjs/operators';

export class PreloadStrategyService implements PreloadingStrategy {
	public preload(route: Route, fn: () => Observable<any>): Observable<any> {
		return of(route).pipe(
			filter((_: Route) => _.path === 'login' || _.path === 'signup'),
			delay(5000),
			mergeMap((_: Route) => {
				console.log(_);
				return fn();
			}),
		);
	}
}
