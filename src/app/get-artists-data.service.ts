import { Injectable } from '@angular/core';
import {ARTISTS} from "./artists-data/artists.mock";
import {Artist} from "./artists-data/artist.interface";

@Injectable({
  providedIn: 'root'
})
export class GetArtistsDataService {

  artistToPreview?: Artist

  constructor() { }

  getAllArtists(): Artist[] {
    return ARTISTS
  }

  getArtistById(id: string): Artist | undefined {
    return ARTISTS.find(artist => artist.id === id)
  }

  currentArtist(id: string): void {
    this.artistToPreview = this.getArtistById(id);
  }


}
