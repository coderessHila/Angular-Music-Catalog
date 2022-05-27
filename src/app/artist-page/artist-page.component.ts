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

    // not with snapshot, you want it to be reactive and to update if params change.
    this.artistId$ = this.route.queryParams.pipe(
      map(params=> params['id'])
    );

  //  update store with current artist by id from params
    this.artist$ = this.artistsStateManagementService.setCurrentArtist(this.artistId$)

  //  this.artist$ = get current artist from store
  //  this will be for other places that want to get this state
  //   this.artist$ = this.artistsQuery.selectCurrentArtist$
  }


}
