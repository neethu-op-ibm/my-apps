import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Output() closeSideNav = new EventEmitter();

  constructor(private router: Router) { }

  onToggleClose(url:string) {
    this.router.navigateByUrl(url);    
    this.closeSideNav.emit();
  }

  ngOnInit() {
  }
}
