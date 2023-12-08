import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahComponent } from './dashboard/dah/dah.component';
import { AddfoyerComponent } from './dashboard/addfoyer/addfoyer.component';
import { ListefoyerComponent } from './dashboard/listefoyer/listefoyer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetpwdComponent } from './auth/resetpwd/resetpwd.component';
import { ConfirmPasswordComponent } from './auth/confirm-password/confirm-password.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DahComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
  {
    path: 'addfoyer',
    component: AddfoyerComponent,
  },
  {
    path: 'listefoyer',
    component: ListefoyerComponent,
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // Default route to signin
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'resetpassword', component: ResetpwdComponent },
  { path: 'confirmpassword/:id', component: ConfirmPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
