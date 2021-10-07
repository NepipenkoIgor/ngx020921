import { NgModule } from '@angular/core';
import { SignupRoutingModule } from './signup-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [SignupComponent],
	imports: [SharedModule, SignupRoutingModule, ReactiveFormsModule],
})
export class SignupModule {}
