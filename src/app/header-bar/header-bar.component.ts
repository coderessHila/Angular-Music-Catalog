import { Component, OnInit } from '@angular/core';
import {UserStoreService} from "../users/services/user-store.service";
import {UsersQuery} from "../users/user-state/user.query";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(private userStoreService:UserStoreService, private usersQuery:UsersQuery) { }

  ngOnInit(): void {
    this.greeting$ = this.usersQuery.selectUserType$.pipe(map(
    //  getting "guest" | "registered" | "admin"
      (type: string) => {
        return type === "guest" ? "Hello guest" : 'Welcome back ' + 'name';
      }
    ))
    this.greeting$.subscribe(value => console.log(value))
  }

  greeting$!: Observable<string>;

  onLogOut() {
    this.userStoreService.logOut()
  }

}
