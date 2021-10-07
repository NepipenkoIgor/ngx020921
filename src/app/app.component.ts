import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	public constructor(private router: Router) {}

	public ngOnInit() {
		console.log(this.router.config);
		this.router.events.subscribe((_e) => {
			//	console.log(e);
		});
	}
}
