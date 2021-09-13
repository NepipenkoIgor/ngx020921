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

const externalModules = [
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	FlexLayoutModule,
	MatBadgeModule,
	MatFormFieldModule,
	MatInputModule,
	MatSidenavModule,
	MatListModule,
];
const internalModules: Type<any>[] = [];

@NgModule({
	exports: [...internalModules, ...externalModules],
})
export class SharedModule {}
