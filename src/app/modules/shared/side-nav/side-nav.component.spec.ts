import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { of } from 'rxjs';
import { AuthenicationService } from 'src/app/services/authenication.service';
import { User } from 'src/app/models/user';
import { RouterTestingModule } from '@angular/router/testing';
class MockedComponent {
}
describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;
  let mockAuthenticationService: any;
  let userSpy = new User(1, 'xxxx', 'yyyy', 'zzzz', 'ssss');

  beforeEach(async () => {
    mockAuthenticationService = { ...jasmine.createSpyObj(['logout', 'currentUserSubject']), currentUserSubject: of(userSpy) }
    await TestBed.configureTestingModule({
      declarations: [
        SideNavComponent
      ],
      imports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'app/registration', component: MockedComponent },
          { path: 'authentication/login', component: MockedComponent }
        ])
      ],
      providers: [{ provide: AuthenicationService, useValue: mockAuthenticationService }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onToggleClose should navigate corresponding url', () => {
    spyOn(component.closeSideNav, 'emit');
    component.onToggleClose('app/registration')
    expect(component.closeSideNav.emit).toHaveBeenCalled();
  });

  it('should logout clear user data', () => {
    spyOn(component,'onToggleClose');
    component.logout();
    expect(component.onToggleClose).toHaveBeenCalledWith('/authentication/login');
  });
});
