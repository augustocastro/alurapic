import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {AuthGuardService} from '../core/auth/auth-guard.service';
import {SignInComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {SignupService} from './signup/signup.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: SignInComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'signup',
        component: SignupComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SignupService]
})
export class HomeRoutingModule {

}
