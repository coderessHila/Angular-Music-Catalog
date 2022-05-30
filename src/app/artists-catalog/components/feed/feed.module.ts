import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { ArtistCardComponent } from '../artist-card/artist-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {SlideShowModule} from "../slide-show/slide-show.module";
import {FavoritesHeartModule} from "../favorites-heart/favorites-heart.module";
// import { HeartFavoritesModule, HeartModule} from "@hs-style";
import {MatSnackBar} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    FeedComponent,
    ArtistCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SlideShowModule,
    FavoritesHeartModule,
    // HeartModule,
    // HeartFavoritesModule
  ],
  exports: [FeedComponent, ArtistCardComponent],
  providers: [MatSnackBar]
})
export class FeedModule { }
