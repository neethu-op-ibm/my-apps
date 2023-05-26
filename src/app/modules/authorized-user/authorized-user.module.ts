import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthorizedUserModuleRoutingModule } from './authorized-user-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, 
    MatTableModule,
    MatPaginatorModule,       
    AuthorizedUserModuleRoutingModule
  ]
})
export class AuthorizedUserModule { }
