import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, switchMap} from "rxjs";
import {UserFavorites} from "../../users/models/user-favorites.interface";
import {UserStoreService} from "../../users/services/user-store.service";
import {UsersStore} from "../../users/user-state/user.store";

@Injectable({
  providedIn: 'root'
})
export class FavoritesApiService {

  BASE_URL = "http://localhost:3000/favorites";

  constructor(private httpClient: HttpClient, private store:UsersStore) {
  }

  // these functions need to be refactored!!!!!!!! getUserFavs!!
  // i think it make sense to save the favorites in the state
  updateFavorites(userId: string, artistId: string): Observable<UserFavorites> {
    console.log("updating favorites of user ", userId, "artist id ", artistId)
    return this.httpClient.get<UserFavorites>(`${this.BASE_URL}/${userId}`).pipe(switchMap(
      (favs: UserFavorites) => {
        const newUserFavs = {
          userFavorites: [...favs.userFavorites, artistId]
        }
        console.log("sending fav to server")
        this.store.setUserFavorites(newUserFavs.userFavorites)
        return this.httpClient.put<UserFavorites>(`${this.BASE_URL}/${userId}`, newUserFavs)
      }
    ))
  }

  // these functions need to be refactored!!!!!!!!
  removeFromFavorites(userId: string, artistId: string | undefined): Observable<UserFavorites> {
    console.log("updating favorites of user ", userId, "artist id ", artistId)
    return this.httpClient.get<UserFavorites>(`${this.BASE_URL}/${userId}`).pipe(switchMap(
      (favs: UserFavorites) => {
        if (artistId) {
          const newFavsArr = favs.userFavorites.filter(id => id !== artistId)
          const newUserFavs = {
            userFavorites: newFavsArr
          }
        console.log("sending fav to server")
          this.store.setUserFavorites(newUserFavs.userFavorites)
          return this.httpClient.put<UserFavorites>(`${this.BASE_URL}/${userId}`, newUserFavs)
        } return of(favs);
      }
    ))
  }

  getUserFavorites$(userId: string): Observable<string[]> {
    return this.httpClient.get<UserFavorites>(`${this.BASE_URL}/${userId}`).pipe(map(
      (favs)=> {
        this.store.setUserFavorites(favs.userFavorites)
        return favs.userFavorites;
      }
    ))
  }
}
