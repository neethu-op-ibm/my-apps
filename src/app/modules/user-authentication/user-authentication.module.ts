import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserAuthenticationRountigModule } from './user-authentication-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    UserAuthenticationRountigModule,
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent
  ],
})
export class UserAuthenticationModule { }
