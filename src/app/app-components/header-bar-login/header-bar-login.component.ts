import { Component, OnInit } from '@angular/core';
import {UserStoreService} from "../../users/services/user-store.service";
import {UsersQuery} from "../../users/user-state/user.query";
import {map, Observable} from "rxjs";
import {UserType} from "../../users/models/userType.enum";

@Component({
  selector: 'app-header-bar-login',
  templateUrl: './header-bar-login.component.html',
  styleUrls: ['./header-bar-login.component.scss']
})
export class HeaderBarLoginComponent implements OnInit {

  constructor(private userStoreService:UserStoreService, private usersQuery:UsersQuery) { }

  ngOnInit(): void {
    this.greeting$ = this.usersQuery.selectUserType$.pipe(map(
    //  getting "guest" | "registered" | "admin"
      (type: string) => {
        return type === UserType.guest ? "Hello guest" : 'Welcome back ' + 'name';
      }
    ))
    this.greeting$.subscribe(value => console.log(value))
  }

  greeting$!: Observable<string>;

  onLogOut() {
    this.userStoreService.logOut()
  }

}
