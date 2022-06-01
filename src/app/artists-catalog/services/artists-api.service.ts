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

  addArtist(artist: Artist): Observable<Artist> {
    // ** add bookings
    return this.httpClient.post<Artist>(`${this.BASE_URL}/artists`, artist)
  }
  updateArtist(artist: Object, artistId?: string): Observable<Artist> {
    console.log(artist)
    console.log(artistId)
    return this.httpClient.put<Artist>(`${this.BASE_URL}/artists/${artistId}`, artist)
  }

  deleteArtist(id:string): Observable<Artist> {
    // *** delete also bookings?
    return this.httpClient.delete<Artist>(`${this.BASE_URL}/artists/${id}`)
  }
  // this.artistsApiService.getArtistGigs(gigs.gigs)
  getArtistGigs(artistId:string, gigs: Gig[]) {

  }

}
