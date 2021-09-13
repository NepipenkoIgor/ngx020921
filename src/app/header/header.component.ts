import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.Default,
})
// implements
// 	OnInit,
// 	OnChanges,
// 	DoCheck,
// 	AfterContentInit,
// 	AfterContentChecked,
// 	AfterViewInit,
// 	AfterViewChecked
export class HeaderComponent {
	@Input()
	public title!: string;

	@Input()
	public sideNav!: MatSidenav;

	// @Input()
	// public person: any = {};

	@Output()
	public menuToggle: EventEmitter<any> = new EventEmitter<any>();

	// public constructor(
	//   private cdr: ChangeDetectorRef
	// ) {
	// 	// console.log('construct', this.title);
	// 	// setTimeout(() => {
	// 	// 	console.log('10000');
	// 	// 	// this.cdr.detectChanges();
	// 	// 	this.cdr.reattach();
	// 	// }, 10000);
	// }

	// public ngOnInit(): void {
	// 	console.log('ngOnInit', this.title);
	// 	setTimeout(() => {
	// 		console.log('3000');
	// 		// this.cdr.detectChanges();
	// 		this.cdr.detach();
	// 	}, 3000);
	// }

	// public ngOnChanges(changes: SimpleChanges) {
	// 	console.log('ngOnChanges', changes);
	// }
	//
	// public ngDoCheck(): void {
	// 	console.log('ngDoCheck');
	// }
	//
	// public ngAfterContentInit(): void {
	// 	console.log('ngAfterContentInit');
	// }
	//
	// public ngAfterContentChecked(): void {
	// 	console.log('ngAfterContentChecked');
	// }
	//
	// public ngAfterViewInit(): void {
	// 	console.log('ngAfterViewInit');
	// }
	//
	// public ngAfterViewChecked(): void {
	// 	console.log('ngAfterViewChecked');
	// }

	public onMenuButtonClick() {
		this.sideNav.toggle();
		// this.menuToggle.emit({ ...event, name: 'Ihor' });
	}
}
