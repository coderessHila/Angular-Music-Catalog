import { Component, OnInit } from '@angular/core';
import {GetArtistsDataService} from "../get-artists-data.service";
import {IArtist} from "../artists-data/artist.interface";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  artists: IArtist[] = this.getArtistsDataService.getAllArtists();
  previewArtist?: IArtist;

  constructor(private getArtistsDataService:GetArtistsDataService) { }

  ngOnInit(): void {
  }

  setPreviewArtist(id:string | undefined) {
    console.log("clicked artist id: ", id)
    if (typeof(id)==='string') {
      this.previewArtist = this.getArtistsDataService.getArtistById(id);
    }
  }


}
