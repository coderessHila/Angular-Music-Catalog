import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistPageComponent } from './artist-page.component';
import { HeartFavoritesModule} from "@hs-style";
import {FavoritesHeartModule} from "../favorites-heart/favorites-heart.module";



@NgModule({
  declarations: [
    ArtistPageComponent
  ],
  imports: [
    CommonModule,
    HeartFavoritesModule,
    FavoritesHeartModule
  ],
  exports: [
    ArtistPageComponent
  ]
})
export class ArtistPageModule { }
