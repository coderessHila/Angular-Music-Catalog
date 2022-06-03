import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareComponent } from './compare.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ArtistsFilterModule} from "../artists-filter/artists-filter.module";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    CompareComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ArtistsFilterModule,
    MatButtonModule
  ],
  exports: [
    CompareComponent
  ]
})
export class CompareModule { }
