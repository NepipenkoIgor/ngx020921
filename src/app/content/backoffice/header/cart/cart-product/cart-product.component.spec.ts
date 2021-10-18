import { ICartProduct } from '../../../store/reducers/cart.reducer';
import { CartProductComponent } from './cart-product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const productMock: ICartProduct = {
	_id: '616d87d65b01c64389220e90',
	title: 'Moto 2X',
	img: 'assets/img/product-2.jpg',
	price: 221,
	author: 'Motorola',
	isFavorite: false,
	count: 1,
};

describe('Cart product', () => {
	let component: CartProductComponent;
	let fixture: ComponentFixture<CartProductComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CartProductComponent],
			imports: [MatIconModule],
		});
		fixture = TestBed.createComponent(CartProductComponent);
		component = fixture.componentInstance;
		component.product = productMock;

		spyOn(component.changeProductCount, 'emit').and.callThrough();
		spyOn(component.removeProduct, 'emit').and.callThrough();
		spyOn(component, 'changeCount').and.callThrough();
		spyOn(component, 'remove').and.callThrough();
		fixture.detectChanges();
	});

	it('should increment', () => {
		const incrementEl: DebugElement = fixture.debugElement.query(By.css('.increment'));
		incrementEl.triggerEventHandler('click', {});
		fixture.detectChanges();
		expect(component.changeCount).toHaveBeenCalledTimes(1);
		expect(component.changeCount).toHaveBeenCalledWith(true);
		expect(component.removeProduct.emit).not.toHaveBeenCalledTimes(1);
		expect(component.changeProductCount.emit).toHaveBeenCalledWith({
			_id: productMock._id,
			count: productMock.count + 1,
		});
	});

	it('should decrement when count 1', () => {
		const decrementEl: DebugElement = fixture.debugElement.query(By.css('.decrement'));
		decrementEl.triggerEventHandler('click', {});
		fixture.detectChanges();
		expect(component.changeCount).toHaveBeenCalledTimes(1);
		expect(component.changeCount).toHaveBeenCalledWith();
		expect(component.removeProduct.emit).toHaveBeenCalledTimes(1);
		expect(component.remove).toHaveBeenCalledTimes(1);
		expect(component.changeProductCount.emit).not.toHaveBeenCalledWith({
			_id: productMock._id,
			count: productMock.count - 1,
		});
	});

	it('should decrement when count more then 1', () => {
		component.product = {
			...component.product,
			count: 2,
		};
		const decrementEl: DebugElement = fixture.debugElement.query(By.css('.decrement'));
		decrementEl.triggerEventHandler('click', {});
		fixture.detectChanges();
		expect(component.changeCount).toHaveBeenCalledTimes(1);
		expect(component.changeCount).toHaveBeenCalledWith();
		expect(component.removeProduct.emit).not.toHaveBeenCalledTimes(1);
		expect(component.remove).not.toHaveBeenCalledTimes(1);
		expect(component.changeProductCount.emit).toHaveBeenCalledWith({
			_id: component.product._id,
			count: component.product.count - 1,
		});
	});

	it('should remove', () => {
		const removeEl: DebugElement = fixture.debugElement.query(By.css('.remove'));
		removeEl.triggerEventHandler('click', {});
		fixture.detectChanges();
		expect(component.changeCount).not.toHaveBeenCalledTimes(1);
		expect(component.remove).toHaveBeenCalledTimes(1);
		expect(component.removeProduct.emit).toHaveBeenCalledTimes(1);
		expect(component.changeProductCount.emit).not.toHaveBeenCalledWith({
			_id: productMock._id,
			count: productMock.count + 1,
		});
	});
});
