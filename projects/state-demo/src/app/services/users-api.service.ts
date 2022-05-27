import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  constructor(private httpClient: HttpClient) {
  }

  BASE_URL = "https://jsonplaceholder.typicode.com/users";

  getUsers(): Observable<User[]> {
    let users$ = this.httpClient.get<User[]>(this.BASE_URL)
    users$.pipe(
      map(users => {
        users.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email
        }))
      })
    )
    return users$;
  }
}
