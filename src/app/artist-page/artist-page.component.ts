import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Artist} from "../catalog/models/artist.interface";
import {ArtistsQuery} from "../catalog/artists-state/artists.query";
import {map, Observable, switchMap} from "rxjs";
import {ArtistsStateManagementService} from "../catalog/catalog-services/artists-state-management.service";

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})

export class ArtistPageComponent implements OnInit {

  artist$!: Observable<Artist>;

  artistId$!: Observable<string>;
  paramsSnap: any;

  constructor(private route: ActivatedRoute, private artistsQuery:ArtistsQuery,
              private artistsStateManagementService:ArtistsStateManagementService) { }

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

    // 'this.artistsQuery.selectCurrentArtist$' will be used by other components in the application that need to get this state.
    //  They will actually get the state from the store.
  }


}
