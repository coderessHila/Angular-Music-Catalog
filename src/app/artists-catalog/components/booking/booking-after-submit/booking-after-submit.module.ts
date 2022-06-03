import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingAfterSubmitComponent } from './booking-after-submit.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    BookingAfterSubmitComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BookingAfterSubmitComponent
  ]
})
export class BookingAfterSubmitModule { }
