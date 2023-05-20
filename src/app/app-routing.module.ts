import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('./modules/user-authentication/user-authentication.module').then(m => m.UserAuthenticationModule)
  },
  {
    path: 'authorized-user',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/authorized-user/authorized-user.module').then(m => m.AuthorizedUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
