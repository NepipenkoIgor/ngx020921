import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ProductsService } from '../products.service';

@Component({
	selector: 'ngx-classwork-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
	providers: [ProductsService],
})
export class SidenavComponent {
	@ViewChild('drawer', { static: true })
	public sidenav!: MatSidenav;

	@Output()
	public setSideNav: EventEmitter<MatSidenav> = new EventEmitter(true);
}
