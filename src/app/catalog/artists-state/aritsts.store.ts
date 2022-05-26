import {Injectable} from "@angular/core";
import {Artist} from "../models/artist.interface";
import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";

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
  //   if there's a user
  //  if artists arr is empty
  //  set artists from the api service in this store
    this.update(state => ({
      ...state,
      allArtists: artists
    }))
  }
}
