import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, Router} from "@angular/router";
import {UsersQuery} from "../../users/user-state/user.query";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuestsService implements CanLoad, CanActivate{
  isUserRegistered$: Observable<boolean>;
  // isUserAdmin$: Observable<boolean>;

  constructor( private usersQuery:UsersQuery, private router:Router) {
    this.isUserRegistered$ = this.usersQuery.selectUserType$.pipe(map(
      (userType: string): boolean => {
        // if user is a guest return false
        return !(userType === 'guest')
      }
    ));

    // this.isUserAdmin$ = this.usersQuery.selectUserType$.pipe(map(
    //   (userType: string): boolean => {
    //     return userType === 'admin'
    //   }
    // ));

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
