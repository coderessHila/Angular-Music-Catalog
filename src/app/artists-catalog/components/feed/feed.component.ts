import {Component, OnInit} from '@angular/core';
// import {GetArtistsDataService} from "../../get-artists-data.service";
import {Artist} from "../../models/artist.interface";
import {ArtistsApiService} from "../../services/artists-api.service";
import {Observable} from "rxjs";
import {ArtistsQuery} from "../../artists-state/artists.query";
import {ArtistsStoreService} from "../../services/artists-store.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {


  previewArtist?: Artist;
  allArtists$?: Observable<Artist[]>;

  constructor(private artistsQuery: ArtistsQuery,
              private artistsStoreService:ArtistsStoreService) { }

  ngOnInit(): void {
    this.setAllArtists()
  }

  setAllArtists() {
    this.artistsStoreService.setAllArtists()
    this.allArtists$ = this.artistsQuery.selectAllArtists$
  }
}
