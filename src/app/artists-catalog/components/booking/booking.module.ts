import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import {HsInputModule} from "@hs-style";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {path: '', component: BookingComponent}
]

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    HsInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ],
  exports: [
    BookingComponent
  ]
})
export class BookingModule { }
