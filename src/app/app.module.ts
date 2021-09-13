import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
	declarations: [AppComponent, HeaderComponent, SearchComponent, SidenavComponent],
	imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
