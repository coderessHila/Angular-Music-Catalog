import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HsInputComponent } from './hs-input.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HsInputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    HsInputComponent
  ]
})
export class HsInputModule { }
