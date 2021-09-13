import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ngx-classwork-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css'],
})
export class SearchComponent {
	// @Input()
	// public searchTerm: string = '';

	@Output()
	// eslint-disable-next-line @angular-eslint/no-output-on-prefix
	public searchTermChange: EventEmitter<string> = new EventEmitter();

	public onSearch(event: Event): void {
		const { value } = event.target as HTMLInputElement;
		this.searchTermChange.emit(value);
	}
}
