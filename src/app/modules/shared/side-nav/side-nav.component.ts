import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenicationService } from 'src/app/services/authenication.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Output() closeSideNav = new EventEmitter();  
  private currentUserSubject: User;

  constructor(private router: Router,
    private authenticationService: AuthenicationService) {
      this.currentUserSubject = this.authenticationService.currentUserValue;
     }

  onToggleClose(url:string) {
    this.router.navigateByUrl(url);    
    this.closeSideNav.emit();
  }

  ngOnInit() {
    console.log(this.authenticationService.getAuthStatus())

  }

  ngOnChanges(){
  }

  logout(){
    this.authenticationService.logout();
    this.onToggleClose('/authentication/login')
  }
}
