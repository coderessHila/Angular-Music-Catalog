import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IArtist} from "../../artists-data/artist.interface";

@Component({
  selector: 'app-feed-artist',
  templateUrl: './feed-artist.component.html',
  styleUrls: ['./feed-artist.component.scss']
})
export class FeedArtistComponent implements OnInit {

  @Input() artist?: IArtist;

  @Output() onClickShowPreview = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onFeedArtistClick(): void {
    if (this.artist) {
      this.onClickShowPreview.emit(this.artist.id)
    }
  }

}
