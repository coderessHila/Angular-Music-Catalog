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
    // this.paramsSnap = this.route.snapshot.queryParams
     // if (this.paramsSnap['id']) {
       // this.artistId = this.paramsSnap.id
       // this.artist = this.artistsQuery.selectCurrentArtist$
     // }
    console.log("init artist page")

    this.artistId$ = this.route.queryParams.pipe(
      map(params=> params['id'])
    );
      // this.artistId$.subscribe((value)=>console.log(value))
    // console.log(this.artistId$)

  //  update store with current artist by id from params
    this.artistsStateManagementService.setCurrentArtist(this.artistId$)

  //  this.artist$ = get current artist from store
    this.artist$ = this.artistsQuery.selectCurrentArtist$
  }


}
