import { Injectable } from '@angular/core';

import { QueryEntity } from '@datorama/akita';
import {UsersState, UsersStore} from "./users.store";


@Injectable({
  providedIn: 'root'
})
export class UsersQuery extends QueryEntity<UsersState> {

  selectAllUsers$ = this.select(state=> {
    return state.allUsers;
  })

  selectCurrentUser$ = this.select(state => {
    if (state['currentUser']) {
    return state['currentUser']
    }
  })

  constructor(protected override store: UsersStore) {
    super(store);
  }
}

