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
  showEditPopUp: boolean = false;
  isEdit: boolean = false;
  artistToEdit?: Artist;

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

  onAddNewArtist(): void {
    this.showEditPopUp = true;
  }

  isEditing(event:boolean, artist?: Artist){
    console.log(artist)
    if (artist?.id) {
      console.log("edit artist")
      this.isEdit = true;
      this.artistToEdit = artist;
    } else {
    this.isEdit = false;
    }
    this.showEditPopUp = event;
  }
}
