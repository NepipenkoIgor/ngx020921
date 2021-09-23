import { ModuleWithProviders, NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [ModalComponent],
	imports: [CommonModule],
	exports: [ModalComponent],
})
export class ModalModule {
	public static forRoot(): ModuleWithProviders<ModalModule> {
		return {
			ngModule: ModalModule,
			providers: [ModalService],
		};
	}
}
