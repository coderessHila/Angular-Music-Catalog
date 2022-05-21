import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedArtistComponent } from './feed-artist/feed-artist.component';
import { PreviewArtistComponent } from './preview-artist/preview-artist.component';



@NgModule({
  declarations: [
    FeedComponent,
    FeedArtistComponent,
    PreviewArtistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FeedComponent]
})
export class FeedModule { }
