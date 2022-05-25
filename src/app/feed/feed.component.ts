import {Component, OnInit} from '@angular/core';
import {GetArtistsDataService} from "../get-artists-data.service";
import {IArtist} from "../artists-data/artist.interface";
import {ArtistDataAccessService} from "../catalog/catalog-services/artist-data-access.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  artists: IArtist[] = this.getArtistsDataService.getAllArtists();
  previewArtist?: IArtist;
  allArtists$?: Observable<IArtist[]>;

  constructor(private getArtistsDataService: GetArtistsDataService, private artistDataAccessService: ArtistDataAccessService) {
  }


  ngOnInit(): void {
  }

  setPreviewArtist(id: string | undefined) {
    console.log("clicked artist id: ", id)
    if (typeof (id) === 'string') {
      this.previewArtist = this.getArtistsDataService.getArtistById(id);
    }
  }

  // demo with subscribe
  // setAllArtists() {
  //   this.artistDataAccessService.getArtists().subscribe((artists: IArtist[]) => console.log(artists))
  // }

  setAllArtists() {
    this.allArtists$ = this.artistDataAccessService.getArtists()
  }


}
