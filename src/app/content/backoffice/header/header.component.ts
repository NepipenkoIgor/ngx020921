import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store';
import { ICartState, trueProductsCount } from '../store/reducers/cart.reducer';

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent {
	@Input()
	public title!: string;

	@Input()
	public sideNav!: MatSidenav;

	@Output()
	public menuToggle: EventEmitter<any> = new EventEmitter<any>();

	public isOpen: boolean = false;

	public cartProductCount$ = this.store.select(trueProductsCount);

	public constructor(private readonly store: Store<IAppState & ICartState>) {}

	public onMenuButtonClick() {
		this.sideNav.toggle();
	}
}
