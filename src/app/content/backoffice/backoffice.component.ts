import { Component } from '@angular/core';
import { UnSubscribeMixin, UnSubscriber } from '../../utils/unsubscriber';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-backoffice',
	templateUrl: './backoffice.component.html',
	styleUrls: ['./backoffice.component.css'],
})
export class BackofficeComponent extends UnSubscribeMixin(UnSubscriber) {
	public text: string = 'Ngx020921';

	public sideNav!: MatSidenav;

	public onSetSideNav(sideNav: MatSidenav): void {
		this.sideNav = sideNav;
	}
}
