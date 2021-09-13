import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

// class Person {
// 	public date = Date.now();
//
// 	public constructor(public name: string) {}
// }

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public text: string = 'Ngx020921';

	public searchTerm!: string;

	public sideNav!: MatSidenav;
	// public me = new Person('Ihor');

	// public constructor(private appRef: ApplicationRef) {
	// 	setTimeout(() => {
	// 		console.log('Need CHECK!!!');
	// 		this.appRef.tick();
	// 	}, 7000);
	// }

	// public ngOnInit(): void {
	// 	setTimeout(() => {
	// 		console.log('7000');
	// 		this.me.name = 'Eugene';
	// 	}, 7000);
	// }
	// public constructor() {} // private cdr: ChangeDetectorRef

	public toggleMenu(event: any) {
		console.log('menu !!!', event);
	}

	public setText(_event: string) {
		// console.log('event', event);
		// this.searchTerm = event;
	}

	public onSetSideNav(sideNav: MatSidenav): void {
		this.sideNav = sideNav;
		console.log(this.sideNav);
		// setTimeout(() => {
		// 	this.sideNav = sideNav;
		// 	console.log(this.sideNav);
		// });
		// Promise.resolve().then(() => {
		// 	this.sideNav = sideNav;
		// 	console.log(this.sideNav);
		// });
		// this.sideNav = sideNav;
		// console.log(this.sideNav);
		// this.cdr.detectChanges();
	}
}
