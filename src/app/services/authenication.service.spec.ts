import { TestBed } from '@angular/core/testing';

import { AuthenicationService } from './authenication.service';

describe('AuthenicationService', () => {
  let service: AuthenicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login check username and password: if it matches test and test, the session storage setitem should be called', () => {
    service.login('test', 'xxx')
    spyOn(sessionStorage, 'setItem');
    service.login('test', 'test');
    expect(sessionStorage.setItem).toHaveBeenCalled();
  });

  it('logout should remove session storage', () => {
    spyOn(sessionStorage, 'removeItem');
    service.logout();
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('currentUser');
  });

  it('getAuthStatus should return login status', () => {
    const user = {
      id: 1,
      username: 'test',
      password: 'test',
      firstName: 'test',
      lastName: 'test'
    }
    spyOn(sessionStorage, 'getItem').and.returnValue(JSON.stringify(user));
    let res = service.getAuthStatus();
    expect(sessionStorage.getItem).toHaveBeenCalled();
    expect(res).toBeTruthy();
  });
});
