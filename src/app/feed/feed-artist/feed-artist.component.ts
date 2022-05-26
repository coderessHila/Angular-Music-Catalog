import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Artist} from "../../artists-data/artist.interface";
import {GetArtistsDataService} from "../../get-artists-data.service";

@Component({
  selector: 'app-feed-artist',
  templateUrl: './feed-artist.component.html',
  styleUrls: ['./feed-artist.component.scss']
})
export class FeedArtistComponent implements OnInit {

  @Input() artist?: Artist;

  // @Output() onClickShowPreview = new EventEmitter<string>()

  constructor(private getArtistsDataService:GetArtistsDataService) { }

  ngOnInit(): void {
  }

  onFeedArtistClick(): void {
    if (this.artist) {
      if(this.artist.id)
      this.getArtistsDataService.currentArtist(this.artist.id);
      // this.onClickShowPreview.emit(this.artist.id)
    }
  }

}
