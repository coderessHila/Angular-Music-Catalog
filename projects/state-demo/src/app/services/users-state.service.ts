import { Injectable } from '@angular/core';
import {UsersStore} from "../state/users.store";
import {UsersApiService} from "./users-api.service";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersStateService {

  constructor(private store:UsersStore, private usersApiService:UsersApiService) { }

  setUsers() {
    this.usersApiService.getUsers().pipe(tap(
      users => this.store.loadUsers(users)
    ))
  }

  // getAllCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>('/api/courses').pipe(
  //     tap(courses => {
  //       this.store.loadCourses(courses, true);
  //     })
  //   );
  // }
}
