import { CanActivateFn, Router, } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenicationService } from './authenication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenicationService);
  const router = inject(Router);
  const isLoggedIn = authService.getAuthStatus();
  if (!isLoggedIn) {
    return true;
  }
  return router.navigate(['/'])
};
