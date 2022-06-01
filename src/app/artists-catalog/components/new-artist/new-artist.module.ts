import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArtistComponent } from './new-artist.component';
import {HsInputModule} from "@hs-style";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatChipsModule} from "@angular/material/chips";



@NgModule({
  declarations: [
    NewArtistComponent
  ],
  imports: [
    CommonModule,
    HsInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule
  ],
  exports: [
    NewArtistComponent
  ]
})
export class NewArtistModule { }
