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

  // the store functions don't care if observables emitted the values their getting
  // they just update the store
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

  addArtist(artist: Artist): void {
    console.log("adding artist to store", artist)
    this.update(state => ({
      ...state,
        allArtists: [...state.allArtists, artist]
    }))
  }

  updateArtist(artist:Artist): void {
    console.log("updating artist in store", artist)
    this.update(state => {
      const artistIndex = state.allArtists.findIndex(ar => ar.id === artist.id);
      const updatedAllArtists = [...state.allArtists]
      updatedAllArtists.splice(artistIndex, 1, artist)
      console.log("updatedAllArtists", updatedAllArtists)
      return ({
        ...state,
        allArtists: updatedAllArtists
      })
    })
  }
}
