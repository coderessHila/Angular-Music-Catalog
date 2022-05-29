import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedArtistComponent } from './feed-artist/feed-artist.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {SlideShowModule} from "../slide-show/slide-show.module";
// import { HeartFavoritesModule, HeartModule} from "@hs-style";


@NgModule({
  declarations: [
    FeedComponent,
    FeedArtistComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SlideShowModule,
    // HeartModule,
    // HeartFavoritesModule
  ],
  exports: [FeedComponent]
})
export class FeedModule { }
