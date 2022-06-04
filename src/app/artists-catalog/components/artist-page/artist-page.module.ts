import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistPageComponent } from './artist-page.component';
import { HeartFavoritesModule} from "@hs-style";
import {FavoritesHeartModule} from "../favorites-heart/favorites-heart.module";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ArtistPageComponent
  ],
    imports: [
        CommonModule,
        HeartFavoritesModule,
        FavoritesHeartModule,
        MatButtonModule
    ],
  exports: [
    ArtistPageComponent
  ]
})
export class ArtistPageModule { }
