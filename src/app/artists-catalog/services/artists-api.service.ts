import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artist} from "../models/artist.interface";
import {Gig} from "../models/booked-gig.interface";

@Injectable({
  providedIn: 'root'
})
export class ArtistsApiService {

  BASE_URL = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getArtists() : Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(`${this.BASE_URL}/artists`)
  }

  getArtistById(id:string) : Observable<Artist> {
    return this.httpClient.get<Artist>(`${this.BASE_URL}/artists/${id}`)
  }

  // this.artistsApiService.getArtistGigs(gigs.gigs)
  getArtistGigs(artistId:string, gigs: Gig[]) {

  }

}
