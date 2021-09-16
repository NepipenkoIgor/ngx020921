import {
	Component,
	ContentChild,
	EventEmitter,
	OnInit,
	Output,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
	@ViewChild('drawer', { static: true })
	public sidenav!: MatSidenav;

	@ViewChild('contentSection', { static: true, read: ViewContainerRef })
	public contentArea!: ViewContainerRef;

	@ContentChild('content', { static: true })
	public content!: TemplateRef<any>;

	@Output()
	public setSideNav: EventEmitter<MatSidenav> = new EventEmitter(true);

	public ngOnInit() {
		this.setSideNav.emit(this.sidenav);
		this.contentArea.createEmbeddedView(this.content);
	}

	// public ngAfterViewInit(): void {
	//
	// }
}
