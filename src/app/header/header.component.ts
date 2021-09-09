import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Input()
	public title!: string;

	@Output()
	public menuToggle: EventEmitter<any> = new EventEmitter<any>();

	public onMenuButtonClick(event: MouseEvent) {
		this.menuToggle.emit({ ...event, name: 'Ihor' });
	}
}
