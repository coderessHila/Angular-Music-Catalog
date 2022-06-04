import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {map, Observable, switchMap} from "rxjs";
import {Artist} from "../../models/artist.interface";
import {UsersQuery} from "../../../users/user-state/user.query";
import {ArtistsQuery} from "../../artists-state/artists.query";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {

  favoriteArtists$!: Observable<Artist[]>;

  constructor(private usersQuery: UsersQuery,
              private artistsQuery: ArtistsQuery) {
  }

  ngOnInit(): void {
    this.favoriteArtists$ = this.usersQuery.selectUserFavorites$.pipe(switchMap(
      (favs: string[]) => {
        //switching to filtered artists array
        return this.artistsQuery.selectAllArtists$.pipe(map(
          (artists) => {
            //  return the artists with the Ids that exist in the favs
            return artists.filter((artist: Artist) =>
              favs.indexOf(<string>artist.id) !== -1
            )
          }
        ))
      }
    ))
  }

//  get users favorites ["1","4",...]
//  filter all artists to match users favorites and set all that in favoriteArtists$
//  i want to turn the favorites array obs to a filtered artist array obs
//   switch map, filter

}
