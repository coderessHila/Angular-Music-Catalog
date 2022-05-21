import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedArtistComponent } from './feed-artist/feed-artist.component';



@NgModule({
  declarations: [
    FeedComponent,
    FeedArtistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FeedComponent]
})
export class FeedModule { }
