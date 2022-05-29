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

  // artists: Artist[] = this.getArtistsDataService.getAllArtists();
  // artists?: Artist[];
  previewArtist?: Artist;
  allArtists$?: Observable<Artist[]>;

  constructor(private artistsQuery: ArtistsQuery,
              private artistsStateManagementService:ArtistsStoreService) { }

  ngOnInit(): void {
  }

  // setPreviewArtist(id: string | undefined) {
  //   console.log("clicked artist id: ", id)
  //   if (typeof (id) === 'string') {
  //     this.previewArtist = this.getArtistsDataService.getArtistById(id);
  //   }
  // }

  // demo with subscribe
  // setAllArtists() {
  //   this.artistDataAccessService.getArtists().subscribe((artists: IArtist[]) => console.log(artists))
  // }

  // before I had state management
  // setAllArtists() {
  //   this.allArtists$ = this.artistDataAccessService.getArtists()
  // }

  setAllArtists() {
    this.artistsStateManagementService.setAllArtists()
    this.allArtists$ = this.artistsQuery.selectAllArtists$
  }

  // getAllArtistsState() {
//  this.allArtists$ =
// }


}
