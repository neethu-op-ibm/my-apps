import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenicationService } from 'src/app/services/authenication.service';
import { of } from 'rxjs';
class MockedComponent {
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthenticationService:any;

  beforeEach(() => {
    mockAuthenticationService = jasmine.createSpyObj(['login']);
    mockAuthenticationService.login.and.returnValue(of({ status: 200 }));
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'authorized-user/home', component: MockedComponent }
        ])
        ,
        HttpClientModule,
        ReactiveFormsModule
      ],
      providers: [{ provide: AuthenicationService, useValue: mockAuthenticationService }]

    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.loginForm).toBeTruthy()
  });

  it('should formControls return all form controls', () => {
    expect(component.formControls).toEqual(component.loginForm.controls)
  });

  it('should login method call auth service', () => {    
    component.loginForm.controls['username'].setValue('test');
    component.loginForm.controls['password'].setValue('test ');
    component.loginForm.clearValidators();
    component.loginForm.updateValueAndValidity();
    component.login();
    expect(component.submitted).toBeTruthy();    
    mockAuthenticationService.login.and.returnValue(of({ status: 401 }));   
    component.login();
    expect(component.error).toEqual('* You entered a wrong credential. Please use test for both username and password.')
  });
});
