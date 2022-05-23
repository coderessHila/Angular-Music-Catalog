import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardComponent } from './artist-card.component';



@NgModule({
  declarations: [
    ArtistCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArtistCardComponent
  ]
})
export class ArtistCardModule { }
