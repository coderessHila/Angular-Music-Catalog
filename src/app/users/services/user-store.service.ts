import {Injectable} from '@angular/core';
import {UsersStore} from "../user-state/user.store";
import {User} from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  constructor(private store: UsersStore) {
  }

  // gets object from login with username and password
  // this is in the api service
  validateUser(user: object) {
    // auth service etc
    // if valid
    // get id and user_type
    // this.setUser(true, user: User)
    // return Observable<User>
  }

  logOut() {
    console.log("logging out")
    this.store.setUser(false)
  }

  setUser(isLogged: boolean, user?: User) {
    return isLogged ? this.store.setUser(isLogged, user) : this.store.setUser(isLogged);
  }
}
