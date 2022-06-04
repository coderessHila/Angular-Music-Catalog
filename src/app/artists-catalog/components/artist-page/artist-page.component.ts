import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Artist} from "../../models/artist.interface";
import {ArtistsQuery} from "../../artists-state/artists.query";
import {map, Observable} from "rxjs";
import {ArtistsStoreService} from "../../services/artists-store.service";
import {FavoritesApiService} from "../../services/favorites-api.service";

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArtistPageComponent implements OnInit {

  artist$!: Observable<Artist>;

  artistId$!: Observable<string>;
  paramsSnap: any;

  constructor(private route: ActivatedRoute, private artistsQuery:ArtistsQuery,
              private artistsStateManagementService:ArtistsStoreService,
              private favoritesApiService:FavoritesApiService) { }

  ngOnInit(): void {
    console.log("init artist page")


    // using 'this.route.queryParams' and not 'this.route.snapshot.params', you want it to be reactive and to update when params change.
    this.artistId$ = this.route.queryParams.pipe(
      map(params=> params['id'])
    );

  //  update store with current artist by id from query params
    this.artist$ = this.artistsStateManagementService.setCurrentArtist(this.artistId$)
    // setCurrentArtist(id:Observable<string>) return the artist$ that it set in currentArtist in the artists state.
    // the component that invokes the state change, should get that value straight from the service method that changes the state.

    // 'this.artistsQuery.selectCurrentArtist$' will be used by other app-components in the application that need to get this state.
    //  They will actually get the state from the store.
  }

  clickFavorites(isFav: boolean) {
    isFav ? console.log("add to favorites by id") : console.log("remove from favorites by id");
    // isFav ? console.log("add to favorites by id") : console.log("remove from favorites by id");
  }

}
