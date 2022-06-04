import { Component, OnInit } from '@angular/core';
import {UsersQuery} from "../users/user-state/user.query";
import {Observable, reduce, Subscription, switchMap, tap} from "rxjs";
import {FavoritesApiService} from "./services/favorites-api.service";
import {UserType} from "../users/models/userType.enum";

@Component({
  selector: 'app-artists-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  userFavs$: Observable<string[]>;

  constructor(private usersQuery:UsersQuery, private favoritesApiService:FavoritesApiService) {
    this.userFavs$ = this.usersQuery.selectUserId$.pipe(switchMap(
      (id:string) => this.favoritesApiService.getUserFavorites$(id)
    ))
  }

  ngOnInit(): void {
    console.log("catalog on init")
    this.usersQuery.selectUserType$.subscribe((type:string) => {
      if (type !== UserType.guest) {
this.userFavs$.subscribe(res=>console.log( "res", res))
      }
    })
  }

}
