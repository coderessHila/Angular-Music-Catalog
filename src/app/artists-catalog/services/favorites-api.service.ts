import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";
import {UserFavorites} from "../../users/models/user-favorites.interface";

@Injectable({
  providedIn: 'root'
})
export class FavoritesApiService {

  BASE_URL = "http://localhost:3000/favorites";

  constructor(private httpClient: HttpClient) {
  }

  // come on ts, it won't be undefined you silly pus
  updateFavorites(userId: string, artistId: string | undefined): Observable<UserFavorites> {
    console.log("updating favorites of user ", userId, "artist id ", artistId)
    return this.httpClient.get<UserFavorites>(`${this.BASE_URL}/${userId}`).pipe(switchMap(
      (favs: UserFavorites) => {
        const newUserFavs = {
          userFavorites: [...favs.userFavorites, artistId]
        }
        console.log("sending fav to server")
        return this.httpClient.put<UserFavorites>(`${this.BASE_URL}/${userId}`, newUserFavs)
      }
    ))
  }
}
