import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthenicationService } from 'src/app/services/authenication.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Output() closeSideNav = new EventEmitter();
  currentUser?: User;

  constructor(private router: Router,
    private authenticationService: AuthenicationService) {
  }

  onToggleClose(url: string) {
    this.router.navigateByUrl(url);
    this.closeSideNav.emit();
  }

  ngOnInit() {
    this.authenticationService.currentUserSub.subscribe((user: User) => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }

  logout() {
    this.authenticationService.logout();
    this.onToggleClose('/authentication/login')
  }
}