import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersStore} from "../../users/user-state/user.store";
import {map, Observable} from "rxjs";
import {BookedGig} from "../models/booked-gig.interface";
import {ArtistsStore} from "../artists-state/aritsts.store";
import {ArtistsApiService} from "./artists-api.service";

@Injectable({
  providedIn: 'root'
})
export class BookedGigsApiService {

  BASE_URL = "http://localhost:3000/bookedGigs";

  constructor(private httpClient: HttpClient, private store: UsersStore, private artistsApiService: ArtistsApiService) {
  }

  bookGig(gig: BookedGig): Observable<BookedGig> {
    return this.httpClient.post<BookedGig>(this.BASE_URL, gig)
  }

  getArtistGigs(artistId: string): Observable<BookedGig[]> {
    return this.httpClient.get<BookedGig[]>(`${this.BASE_URL}?artistId=${artistId}`)
  }
}
