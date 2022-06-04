import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, Router} from "@angular/router";
import {UsersQuery} from "../../users/user-state/user.query";
import {map, Observable, tap} from "rxjs";
import {UserType} from "../../users/models/userType.enum";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuestsService implements CanLoad, CanActivate{
  isUserRegistered$: Observable<boolean>;

  constructor( private usersQuery:UsersQuery, private router:Router) {
    this.isUserRegistered$ = this.usersQuery.selectUserType$.pipe(map(
      (userType: string): boolean => {
        // if user is a guest return false
        return !(userType === UserType.guest)
      }
    ));
  }

  isUserRegistered(): Observable<boolean> {
    return this.isUserRegistered$
  }

  canLoad(): Observable<boolean> {
    return this.isUserRegistered$.pipe(tap(
      isRegistered => {
        if (!isRegistered) {
          this.router.navigateByUrl('login')
          alert("please log in to access this feature")
        }
      }
    ))
  }

  canActivate(): Observable<boolean> {
    return this.isUserRegistered$.pipe(tap(
      isRegistered => {
        if (!isRegistered) {
          this.router.navigateByUrl('login')
          alert("please log in again to access this feature")
        }
      }
    ))
  }
}
