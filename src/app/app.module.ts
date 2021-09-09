import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
// NgModule => es6
// declarations => let/const
//imports = import
//exports = export
@NgModule({
	declarations: [AppComponent, HeaderComponent], // Directives/Pipes
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		FlexLayoutModule,
		MatBadgeModule,
	],
	exports: [], // Directives/Pipes/NgModule
	bootstrap: [AppComponent],
})
export class AppModule {}
