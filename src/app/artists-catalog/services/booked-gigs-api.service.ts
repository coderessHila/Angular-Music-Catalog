import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersStore} from "../../users/user-state/user.store";
import {map, Observable} from "rxjs";
import {ArtistGigs, Gig} from "../models/booked-gig.interface";
import {ArtistsStore} from "../artists-state/aritsts.store";
import {ArtistsApiService} from "./artists-api.service";

@Injectable({
  providedIn: 'root'
})
export class BookedGigsApiService {

  BASE_URL = "http://localhost:3000/favorites";

  constructor(private httpClient: HttpClient, private store:UsersStore, private artistsApiService:ArtistsApiService) { }

  getArtistBookedGigs$(artistId: string): Observable<Gig[]> {
    return this.httpClient.get<ArtistGigs>(`${this.BASE_URL}/${artistId}`).pipe(map(
      (gigs)=> {
        // going to write this function
        this.artistsApiService.getArtistGigs(artistId, gigs.gigs)
        return gigs.gigs;
      }
    ))
  }
}
