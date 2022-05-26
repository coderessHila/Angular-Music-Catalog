import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artist} from "../models/artist.interface";

@Injectable({
  providedIn: 'root'
})
export class ArtistDataAccessService {

  BASE_URL = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getArtists() : Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(`${this.BASE_URL}/artists`)
  }
}