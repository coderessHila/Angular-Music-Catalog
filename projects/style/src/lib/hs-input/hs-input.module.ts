import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HsInputComponent } from './hs-input.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    HsInputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    HsInputComponent
  ]
})
export class HsInputModule { }
