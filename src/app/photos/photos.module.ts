import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {PhotoFormModule} from './photo-form/photo-form.module';
import {PhotoModule} from './photo/photo.module';
import {PhotosComponent} from './photo-list/photos/photos.component';
import {CadModule} from '../shared/components/cad/cad.module';
import {DarkenOnHoverModule} from './photo-list/search/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [PhotosComponent],
  imports: [
    PhotoModule,
    PhotoFormModule,
    HttpClientModule,
    CommonModule,
    CadModule,
    DarkenOnHoverModule
  ],
  exports: [PhotosComponent]
})
export class PhotosModule {

}
