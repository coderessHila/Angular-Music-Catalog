import { Injectable } from '@angular/core';
import {ARTISTS} from "./artists-data/artists.mock";
import {IArtist} from "./artists-data/artist.interface";

@Injectable({
  providedIn: 'root'
})
export class GetArtistsDataService {

  constructor() { }

  getAllArtists(): IArtist[] {
    return ARTISTS
  }

  getArtistById(id: string): IArtist | undefined {
    return ARTISTS.find(artist => artist.id === id)
  }
}
