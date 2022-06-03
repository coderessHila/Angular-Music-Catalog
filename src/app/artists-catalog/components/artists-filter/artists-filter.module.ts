import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsFilterComponent } from './artists-filter.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ArtistsFilterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    ArtistsFilterComponent
  ]
})
export class ArtistsFilterModule { }
