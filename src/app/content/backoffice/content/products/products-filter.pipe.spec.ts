import { ProductsFilterPipe } from './products-filter.pipe';
import { IProduct } from './products.service';

const productsMock: IProduct[] = [
	{
		_id: '616d87d65b01c64389220e90',
		title: 'Moto 2X',
		img: 'assets/img/product-2.jpg',
		price: 221,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '616d87d65b01c64389220e91',
		title: 'Galaxy S3',
		img: 'assets/img/product-5.jpg',
		price: 23,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		_id: '616d87d65b01c64389220e92',
		title: 'IPad 12 pro',
		img: 'assets/img/product-6.jpg',
		price: 2344,
		author: 'Apple',
		isFavorite: false,
	},
	{
		_id: '616d87d65b01c64389220e93',
		title: 'Moto 31',
		img: 'assets/img/product-7.jpg',
		price: 334,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '616d87d65b01c64389220e94',
		title: 'IPad 8',
		img: 'assets/img/product-8.jpg',
		price: 22,
		author: 'Apple',
		isFavorite: false,
	},
	{
		_id: '616d87d65b01c64389220e95',
		title: 'IPad 10',
		img: 'assets/img/product-9.jpg',
		price: 1200,
		author: 'Apple',
		isFavorite: true,
	},
	{
		_id: '616d87d65b01c64389220e96',
		title: 'Galaxy 10',
		img: 'assets/img/product-1.jpg',
		price: 200,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		_id: '616d87d65b01c64389220e97',
		title: 'Moto 11',
		img: 'assets/img/product-4.jpg',
		price: 2345,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '616d87d65b01c64389220e98',
		title: 'Galaxy A',
		img: 'assets/img/product-3.jpg',
		price: 333,
		author: 'Samsung',
		isFavorite: true,
	},
];

describe('Products Filter Pipe', () => {
	let productsFilterPipe: ProductsFilterPipe;

	beforeEach(() => {
		productsFilterPipe = new ProductsFilterPipe();
	});

	it('should filter', () => {
		expect(productsFilterPipe.transform(productsMock, '')).toEqual(productsMock);
		expect(productsFilterPipe.transform(productsMock, 'Galaxy A')).toEqual([
			productsMock[productsMock.length - 1] as IProduct,
		]);
		expect(productsFilterPipe.transform(productsMock, '', true)).toEqual(
			productsMock.filter((product) => product.isFavorite),
		);
	});
});
