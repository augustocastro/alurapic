import {NgModule} from '@angular/core';
import {PhotoListComponent} from './photo-list.component';
import {LoadButtonComponent} from './load-button/load-button.component';
import {FilterByDescriptionPipe} from './filter-by-description.pipe';
import {CommonModule} from '@angular/common';
import {CadModule} from '../../shared/components/cad/cad.module';
import {PhotosModule} from '../photos.module';
import {SearchComponent} from './search/search.component';
import {DarkenOnHoverModule} from './search/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotosModule,
    CadModule,
    DarkenOnHoverModule
  ]
})
export class PhotoListModule {

}
