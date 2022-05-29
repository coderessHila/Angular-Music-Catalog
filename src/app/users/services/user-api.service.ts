import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, Observable, switchMap, tap} from "rxjs";
import {User} from "../models/user.interface";
import {LoginDetails} from "../models/loginDetails.interface";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:3000/users"

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}`)
  }

  validateUser(loginDetails: LoginDetails): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/?username=${loginDetails.username}`).pipe(filter(
      (users: User[]) => {
        if (!users[0]) {
          console.log("no such username")}
        users[0].password === loginDetails.password ? console.log("valid") : console.log("not valid");
          return users[0].password === loginDetails.password
      }
    ))
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/${id}`)
  }
}
