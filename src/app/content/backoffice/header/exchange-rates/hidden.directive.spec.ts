import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiddenDirective } from './hidden.directive';
import { By } from '@angular/platform-browser';

@Component({
	selector: 'ngx-classwork-hidden-directive-test',
	template: `
		<div ngxClassworkHidden #c="cwHidden"></div>
		<span class="hide" (click)="c.hide()">Hide</span>
		<span class="show" (click)="c.show()">Show</span>
	`,
})
class TestComponent {}

describe('Hidden directive', () => {
	let fixture: ComponentFixture<TestComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestComponent, HiddenDirective],
		});
		fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();
	});

	it('should hide and show element', () => {
		const el: DebugElement = fixture.debugElement.query(By.css('[ngxClassworkHidden]'));
		const hiddenBtn: DebugElement = fixture.debugElement.query(By.css('.hide'));
		const showBtn: DebugElement = fixture.debugElement.query(By.css('.show'));
		hiddenBtn.triggerEventHandler('click', {});
		fixture.detectChanges();
		expect(el.styles['visibility']).toEqual('hidden');
		showBtn.triggerEventHandler('click', {});
		fixture.detectChanges();
		expect(el.styles['visibility']).toEqual('visible');
	});
});
