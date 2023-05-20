import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthorizedUserModuleRoutingModule } from './authorized-user-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthorizedUserModuleRoutingModule
  ]
})
export class AuthorizedUserModule { }
