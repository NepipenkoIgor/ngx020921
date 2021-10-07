import { NgModule, Type } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { WithoutSpecialCharactersDirective } from './validators/without-special-characters.directive';
import { ValidatorsService } from './validators/validators.service';

const externalModules = [
	CommonModule,
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	FlexLayoutModule,
	MatBadgeModule,
	MatFormFieldModule,
	MatInputModule,
	MatSidenavModule,
	MatListModule,
	MatCardModule,
	MatProgressSpinnerModule,
	MatCheckboxModule,
];
const internalModules: Type<any>[] = [];

@NgModule({
	exports: [...internalModules, ...externalModules, WithoutSpecialCharactersDirective],
	declarations: [WithoutSpecialCharactersDirective],
	providers: [ValidatorsService],
})
export class SharedModule {}
