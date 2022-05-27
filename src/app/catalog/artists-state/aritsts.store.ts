import {Injectable} from "@angular/core";
import {Artist} from "../models/artist.interface";
import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";
import {Observable} from "rxjs";

export interface ArtistsState extends EntityState<Artist, string> {
  allArtists: Artist[];
}
export function createInitialState(): ArtistsState {
  return {
    allArtists: []
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'artists' })
export class ArtistsStore extends EntityStore<ArtistsState> {
  constructor() {
    super(createInitialState());
  }

  // when i have a user state, i'll check if there's a user, then load the artists
  loadArtists(artists: Artist[]) {
    console.log("load artists in store: ")
  //   if there's a user
  //  if artists arr is empty
  //  set artists from the api service in this store
    this.update(state => {
      console.log("state before update: ", state)
      return {
      ...state,
      allArtists: artists
    }})
    // to delete, just for debugging
    this.update(console.log)
  }

  setCurrentArtist(artist: Artist) {
    console.log("set current artist in store", artist);
    this.update(state => {
      return{
        ...state,
        currentArtist: artist
      }
    })
    // to delete, just for debugging
    this.update(console.log)
  }
}
