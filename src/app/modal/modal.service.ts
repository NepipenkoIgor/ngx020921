import { Injectable, Injector, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IModalData {
	component: Type<any>;
	injector?: Injector;
	context: { [key: string]: any };
}

@Injectable()
export class ModalService {
	private _modalSequence$$: Subject<IModalData | null> = new Subject<IModalData | null>();

	public open(data: IModalData) {
		this._modalSequence$$.next(data);
	}

	public close() {
		this._modalSequence$$.next(null);
	}

	public get modalSequence$(): Observable<IModalData | null> {
		return this._modalSequence$$.asObservable();
	}
}
