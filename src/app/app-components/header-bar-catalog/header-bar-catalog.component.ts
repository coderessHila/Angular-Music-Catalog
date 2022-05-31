import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {UserStoreService} from "../../users/services/user-store.service";
import {UsersQuery} from "../../users/user-state/user.query";

@Component({
  selector: 'app-header-bar-catalog',
  templateUrl: './header-bar-catalog.component.html',
  styleUrls: ['./header-bar-catalog.component.scss']
})
export class HeaderBarCatalogComponent implements OnInit {
  greeting$!: Observable<string>;


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

  onLogOut() {
    this.userStoreService.logOut()
  }

}
