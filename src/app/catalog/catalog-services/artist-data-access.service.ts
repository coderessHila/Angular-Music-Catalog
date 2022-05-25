import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IArtist} from "../../artists-data/artist.interface";

@Injectable({
  providedIn: 'root'
})
export class ArtistDataAccessService {

  BASE_URL = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getArtists() : Observable<any> {
    return this.httpClient.get<IArtist[]>(`${this.BASE_URL}/artists`)
  }
}
