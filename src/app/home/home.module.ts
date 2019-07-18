import {NgModule} from '@angular/core';
import {SignInComponent} from './signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {VmessageModule} from '../shared/vmessage/vmessage.module';
import {RouterModule} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home.routing.module';

@NgModule({
  declarations: [
    SignInComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule {

}
