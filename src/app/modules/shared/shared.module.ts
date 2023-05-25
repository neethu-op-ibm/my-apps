import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthenicationService } from 'src/app/services/authenication.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  providers: [
    AuthenicationService
  ]
})
export class SharedModule { }
