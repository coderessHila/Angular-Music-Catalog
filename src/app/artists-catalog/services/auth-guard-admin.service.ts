import { Injectable } from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {UsersQuery} from "../../users/user-state/user.query";
import {CanActivate, CanLoad, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService implements CanLoad, CanActivate{
  isUserAdmin$: Observable<boolean>;


  constructor(private usersQuery: UsersQuery, private router:Router) {
    this.isUserAdmin$ = this.usersQuery.selectUserType$.pipe(map(
      (userType: string): boolean => {
        return userType === 'admin'
      }
    ));
  }

  canLoad(): Observable<boolean> {
    return this.isUserAdmin$.pipe(tap(
      isAdmin => {
        if (!isAdmin) {
          this.router.navigateByUrl('login')
          alert("please log in as admin")
        }
      }
    ))
  }

  canActivate(): Observable<boolean> {
    return this.isUserAdmin$.pipe(tap(
      isAdmin => {
        if (!isAdmin) {
          this.router.navigateByUrl('login')
          alert("please log in as admin again")
        }
      }
    ))
  }
}
