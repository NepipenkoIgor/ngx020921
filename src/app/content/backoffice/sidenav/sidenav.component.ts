import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store';
import { logOut } from '../../../store/actions/auth.actions';

@Component({
	selector: 'ngx-classwork-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
	@ViewChild('drawer', { static: true })
	public sidenav!: MatSidenav;

	@Output()
	public setSideNav: EventEmitter<MatSidenav> = new EventEmitter(true);

	public constructor(private readonly store: Store<IAppState>) {}

	public ngOnInit() {
		this.setSideNav.emit(this.sidenav);
	}

	public logout() {
		this.store.dispatch(logOut());
	}
}
