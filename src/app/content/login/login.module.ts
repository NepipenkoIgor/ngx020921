import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [LoginComponent],
	imports: [SharedModule, LoginRoutingModule, FormsModule],
})
export class LoginModule {}
