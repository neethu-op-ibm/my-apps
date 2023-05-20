import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthorizedUserModule } from './modules/authorized-user/authorized-user.module';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAuthenticationModule } from './modules/user-authentication/user-authentication.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenicationService } from './services/authenication.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    SharedModule,
    UserAuthenticationModule,
    AuthorizedUserModule,
  ],
  providers: [
    AuthenicationService
  ],
  bootstrap: [AppComponent],
  exports: [AuthorizedUserModule]
})
export class AppModule { }
