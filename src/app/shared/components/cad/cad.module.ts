import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadComponent} from './cad.component';

@NgModule({
  declarations: [CadComponent],
  imports: [
    CommonModule
  ],
  exports: [CadComponent]
})
export class CadModule { }
