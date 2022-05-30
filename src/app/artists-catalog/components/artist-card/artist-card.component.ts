import {Component, OnInit, Input} from '@angular/core';
import {Artist} from "../../models/artist.interface";
// import {GetArtistsDataService} from "../../../get-artists-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ArtistsStoreService} from "../../services/artists-store.service";
import {FavoritesApiService} from "../../services/favorites-api.service";
import {UsersQuery} from "../../../users/user-state/user.query";
import {map, switchMap, tap} from "rxjs";
import {success} from "ng-packagr/lib/utils/log";
import {
  AddedToFavsSnackBarComponent,
  NoFavsPermissionSnackBarComponent,
  RemovedFromFavsSnackBarComponent,
  SnackBarComponent
} from "@hs-style";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input() artist!: Artist;

  constructor(
    // private getArtistsDataService: GetArtistsDataService,
    private router: Router,
    private route: ActivatedRoute,
    private artistsStateManagementService: ArtistsStoreService,
    private favoritesApiService: FavoritesApiService,
    private usersQuery: UsersQuery,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  navigateToArtistPage() {
    this.router.navigate(['artist'], {
      relativeTo: this.route.parent,
      queryParams: {artistName: this.artist?.name, id: this.artist?.id}
    })
  }

  navigateToBookingPage() {
    this.router.navigate(['booking'], {
      relativeTo: this.route.parent,
      queryParams: {artistName: this.artist?.name, id: this.artist?.id}
    })
  }

  clickFavorites(isFav: boolean) {
    isFav ? console.log("add to favorites", this.artist.id) : console.log("remove from favorites", this.artist?.id);

    // if (isFav) {
    this.usersQuery.selectUserId$.pipe(switchMap(
      userId => {
        return isFav ?
          this.favoritesApiService.updateFavorites(userId, this.artist.id) :
          this.favoritesApiService.removeFromFavorites(userId, this.artist.id);
      }
    )).subscribe(success => console.log("updated favs", success))
    this.openSnackBar(isFav)
  }

  openSnackBar(isFav: boolean) {
    this.usersQuery.selectUserType$.subscribe(value => {
      if (value === 'guest') {
        this._snackBar.openFromComponent(NoFavsPermissionSnackBarComponent, {
          duration: 2000,
        });
      } else if (value === 'registered') {
        isFav ? this._snackBar.openFromComponent(AddedToFavsSnackBarComponent, {
          duration: 2000,
        }) : this._snackBar.openFromComponent(RemovedFromFavsSnackBarComponent, {
          duration: 2000,
        })
      }
    })
  }
}
