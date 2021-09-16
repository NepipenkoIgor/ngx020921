import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

export interface IProduct {
	title: string;
	img: string;
	price: number;
	author: string;
	isFavorite: boolean;
}

export const products: IProduct[] = [
	{
		title: 'Galaxy 10',
		img: 'assets/img/product-1.jpg',
		price: 200,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		title: 'Moto 2X',
		img: 'assets/img/product-2.jpg',
		price: 221,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		title: 'Galaxy A',
		img: 'assets/img/product-3.jpg',
		price: 333,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		title: 'Moto 11',
		img: 'assets/img/product-4.jpg',
		price: 2345,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		title: 'Galaxy S3',
		img: 'assets/img/product-5.jpg',
		price: 23,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		title: 'IPad 12 pro',
		img: 'assets/img/product-6.jpg',
		price: 2344,
		author: 'Apple',
		isFavorite: false,
	},
	{
		title: 'Moto 31',
		img: 'assets/img/product-7.jpg',
		price: 334,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		title: 'IPad 8',
		img: 'assets/img/product-8.jpg',
		price: 22,
		author: 'Apple',
		isFavorite: false,
	},
	{
		title: 'IPad 10',
		img: 'assets/img/product-9.jpg',
		price: 1200,
		author: 'Apple',
		isFavorite: true,
	},
];

export const products$: Observable<IProduct[]> = of(products).pipe(
	delay(2000),
	catchError((err) => {
		console.log(err);
		return of([]);
	}),
);
