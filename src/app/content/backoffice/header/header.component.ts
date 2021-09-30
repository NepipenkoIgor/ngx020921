import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

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

	public onMenuButtonClick() {
		this.sideNav.toggle();
	}
}
