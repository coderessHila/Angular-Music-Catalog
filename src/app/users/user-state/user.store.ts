import {Injectable} from "@angular/core";
import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";
import {User} from "../user.interface";

export interface UsersState extends EntityState<User, string> {
  user: User | {user_type: string},
  userFavorites: string[]
}

export function createInitialState(): UsersState {
  return {
    user: {user_type: "guest"},
    userFavorites: []
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'artists'})
export class UsersStore extends EntityStore<UsersState> {
  constructor() {
    super(createInitialState());
  }

  setUser(isLogged: boolean, loggedUser?: User): User | undefined {
    console.log("set user in store");

    this.update(state => {
      return isLogged ? ({
        ...state,
        user: loggedUser
      }) : ({
        ...state,
        user: {user_type: "guest"}
      })
    })
    // to delete, just for debugging
    this.update(console.log)
    return isLogged ? loggedUser : undefined;
  }



  // the store functions don't care if observables emitted the values their getting
  // they just update the store
}
