import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

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

	public ngOnInit() {
		this.setSideNav.emit(this.sidenav);
	}
}
