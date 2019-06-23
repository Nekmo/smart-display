import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [DisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DisplayComponent,
  ]
})
export class DisplayModule { }
