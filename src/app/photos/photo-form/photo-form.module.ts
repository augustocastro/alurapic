import {NgModule} from '@angular/core';
import {PhotoFormComponent} from './photo-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VmessageModule} from '../../shared/vmessage/vmessage.module';
import {RouterModule} from '@angular/router';
import {PhotoModule} from '../photo/photo.module';
import {ImmediateClickModule} from '../photo-list/search/directives/immediate-click/immediate-click.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    VmessageModule,
    ReactiveFormsModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule
  ]
})
export class PhotoFormModule {

}
