import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotoModule} from '../../photo/photo.module';
import {CadModule} from '../../../shared/components/cad/cad.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    CadModule
  ]
})
export class PhotosModule {
}
