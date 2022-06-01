import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArtistComponent } from './new-artist.component';
import {HsInputModule} from "@hs-style";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    NewArtistComponent
  ],
  imports: [
    CommonModule,
    HsInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    NewArtistComponent
  ]
})
export class NewArtistModule { }
