import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistPageComponent } from './artist-page.component';



@NgModule({
  declarations: [
    ArtistPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArtistPageComponent
  ]
})
export class ArtistPageModule { }
