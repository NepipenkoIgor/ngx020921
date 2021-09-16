import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UnSubscriber implements OnDestroy {
	public unSubscribe$$ = new Subject();

	public ngOnDestroy(): void {
		this.unSubscribe$$.next();
		this.unSubscribe$$.complete();
	}
}

export type Constructable = new (...args: any[]) => any;

export function UnSubscribeMixin<BC extends Constructable>(Base: BC) {
	return class extends Base {
		public unSubscribe$$ = new Subject();

		public ngOnDestroy(): void {
			this.unSubscribe$$.next();
			this.unSubscribe$$.complete();
			super.ngOnDestroy();
		}
	};
}
