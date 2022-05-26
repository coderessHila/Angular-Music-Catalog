import { Injectable } from '@angular/core';
import {QueryEntity} from "@datorama/akita";
import {ArtistsState, ArtistsStore} from "./aritsts.store";


@Injectable({
  providedIn: 'root'
})
export class ArtistsQuery extends QueryEntity<ArtistsState> {

  constructor(protected override store: ArtistsStore) {
    super(store);
  }

  selectAllArtists$ = this.select(state=> {
    return state.allArtists;
  })

  selectCurrentArtist$ = this.select(state => {
    if (state['currentArtist$']) {
      console.log("current artist exists")
    return state['currentArtist$'];
    }
  })
}
