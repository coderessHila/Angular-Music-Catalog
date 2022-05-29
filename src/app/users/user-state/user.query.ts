import {Injectable} from '@angular/core';
import {QueryEntity} from "@datorama/akita";
import {UsersState, UsersStore} from "./user.store";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsersQuery extends QueryEntity<UsersState> {

  constructor(protected override store: UsersStore) {
    super(store);
  }

  // query methods return Observables.
  // "The new state is published via Observable steam"

  selectUser$: Observable<object> = this.select(state => state.user)

  selectUserId$ : Observable<string> = this.select(state => {
    if ('id' in state.user) {
      return state.user.id
    } else {
      return "no user"
    }
  })

  selectUserType$: Observable<string> = this.select(state =>
    state.user.user_type
  )

  selectUserFavorites$: Observable<string[]> = this.select(state=>state.userFavorites)
}
