import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PhotosModule} from './photos/photos.module';
import {AppRoutingModule} from './app.routing.module';
import {ErrorsModule} from './errors/errors.module';
import {PhotoListModule} from './photos/photo-list/photo-list.module';
import {VmessageModule} from './shared/vmessage/vmessage.module';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    PhotoListModule,
    VmessageModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  

}
