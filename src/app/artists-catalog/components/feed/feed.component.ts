import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
// import {GetArtistsDataService} from "../../get-artists-data.service";
import {Artist} from "../../models/artist.interface";
import {ArtistsApiService} from "../../services/artists-api.service";
import {Observable} from "rxjs";
import {ArtistsQuery} from "../../artists-state/artists.query";
import {ArtistsStoreService} from "../../services/artists-store.service";
import {UsersQuery} from "../../../users/user-state/user.query";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnChanges{
  showEditPopUp: boolean = false;
  isEdit: boolean = false;
  artistToEdit?: Artist;

  allArtists$?: Observable<Artist[]>;
  userType$: Observable<string> = this.usersQuery.selectUserType$

  constructor(private artistsQuery: ArtistsQuery,
              private artistsStoreService:ArtistsStoreService,
              private usersQuery:UsersQuery) { }

  ngOnInit(): void {
    console.log("feed on init")
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

  ngOnChanges(): void {
    console.log("feed On Changes")
  }
}
