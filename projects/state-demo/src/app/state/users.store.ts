import { Injectable } from '@angular/core';
import {User} from "../models/user.model"
import { ID, EntityStore, StoreConfig, EntityState } from '@datorama/akita';

export interface UsersState extends EntityState<User, string> {
  allUsers: User[];
}

export function createInitialState(): UsersState {
  return {
    allUsers: []
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'users' })

export class UsersStore extends EntityStore<UsersState> {

  constructor() {
    super(createInitialState());
  }

  loadUsers(users: User[]){
    this.update(state => ({
      ...state,
      allUsers: users
    }))
  }
}

