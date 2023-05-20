import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserAuthenticationRountigModule } from './user-authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenicationService } from 'src/app/services/authenication.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    UserAuthenticationRountigModule,
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent
  ],  
  providers: [
    AuthenicationService
  ],
})
export class UserAuthenticationModule { }
