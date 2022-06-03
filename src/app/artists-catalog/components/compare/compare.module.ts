import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareComponent } from './compare.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [
    CompareComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    CompareComponent
  ]
})
export class CompareModule { }
