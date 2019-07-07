import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotosComponent} from './photos.component';
import {PhotoModule} from '../../photo/photo.module';
import {CadModule} from '../../../shared/components/cad/cad.module';

@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    PhotoModule,
    CadModule
  ]
})
export class PhotosModule {
}
