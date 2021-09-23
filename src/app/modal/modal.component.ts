import {
	Component,
	ComponentFactory,
	ComponentFactoryResolver,
	ComponentRef,
	HostListener,
	OnInit,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { IModalData, ModalService } from './modal.service';

@Component({
	selector: 'ngx-classwork-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
	public isOpen: boolean = false;

	public product!: any;

	@ViewChild('modalContent', { read: ViewContainerRef })
	// @ts-ignore
	public modal: ViewContainerRef;

	private componentFactory!: ComponentFactory<any>;

	private componentRef!: ComponentRef<any>;

	public constructor(
		private readonly modalService: ModalService,
		private readonly cfr: ComponentFactoryResolver, // private readonly cdr: ChangeDetectorRef,
	) {}

	public ngOnInit(): void {
		this.modalService.modalSequence$.subscribe((modalData: IModalData | null) => {
			if (!modalData) {
				this.close();
				return;
			}

			this.isOpen = true;

			this.componentFactory = this.cfr.resolveComponentFactory(modalData.component);

			this.componentRef = this.modal.createComponent(this.componentFactory);

			Object.keys(modalData.context).forEach(
				(key: string) => (this.componentRef.instance[key] = modalData.context[key]),
			);
			this.componentRef.changeDetectorRef.detectChanges();
		});
	}

	@HostListener('window:keyup', ['$event.keyCode'])
	public close(code: number = 27) {
		if (code !== 27) {
			return;
		}
		if (this.componentRef) {
			this.componentRef.destroy();
		}
		this.isOpen = false;
	}
}
