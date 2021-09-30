import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

export interface IProduct {
	_id: string;
	title: string;
	img: string;
	price: number;
	author: string;
	isFavorite: boolean;
}

@Injectable()
export class ProductsService {
	// public timestamp = Date.now();

	public constructor(private http: HttpClient) {}

	public getProducts(): Observable<IProduct[]> {
		return this.http.get<IProduct[]>(`/products`).pipe(
			catchError((err) => {
				console.log(err);
				return of([]);
			}),
		);
	}
}
