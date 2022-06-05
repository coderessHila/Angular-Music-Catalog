import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artist} from "../../models/artist.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ArtistsStoreService} from "../../services/artists-store.service";
import {FavoritesApiService} from "../../services/favorites-api.service";
import {UsersQuery} from "../../../users/user-state/user.query";
import {map, Observable, take} from "rxjs";
import {
  AddedToFavsSnackBarComponent,
  NoFavsPermissionSnackBarComponent,
  RemovedFromFavsSnackBarComponent,
} from "@hs-style";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthGuardGuestsService} from "../../services/auth-guard-guests.service";
import {UserType} from "../../../users/models/userType.enum";


@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistCardComponent implements OnInit {

  @Input() artist!: Artist;
  @Input() isFeed = false;
  @Output() onEditArtistClick = new EventEmitter<boolean>()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private artistsStateManagementService: ArtistsStoreService,
    private favoritesApiService: FavoritesApiService,
    private usersQuery: UsersQuery,
    private _snackBar: MatSnackBar,
    private authGuardGuestsService: AuthGuardGuestsService,
    private artistsStoreService: ArtistsStoreService) {
    this.isFavChecked$ = this.isFav$()
    this.isUserRegistered$ = this.authGuardGuestsService.isUserRegistered()
  }

  isFavChecked$: Observable<boolean>;
  isUserRegistered$: Observable<boolean>;
  private userId!: string;
  userType$: Observable<string> = this.usersQuery.selectUserType$

  ngOnInit(): void {
    this.usersQuery.selectUserId$.pipe(take(1)).subscribe(userId => this.userId = userId)
  }

  onEditClick(): void {
    this.onEditArtistClick.emit(true)
  }

  isFav$(): Observable<boolean> {
    //  get users favs from store
    return this.usersQuery.selectUserFavorites$.pipe(map(
      (favs: string[]) => {
        return (favs.findIndex(artistId => artistId === this.artist.id) !== -1)
      }
    ))
    //  check if this artist.id is in favs
    //  if it is return true
    //  if not return false
  }

  navigateToArtistPage() {
    this.router.navigate(['catalog/artist'], {
      relativeTo: this.route.root,
      queryParams: {artistName: this.artist?.name, id: this.artist?.id}
    })
  }

  navigateToBookingPage() {
    this.router.navigate(['catalog/booking'], {
      relativeTo: this.route.root,
      queryParams: {artistName: this.artist?.name, id: this.artist?.id}
    })
  }

  clickFavorites(isFav: boolean) {
    isFav ? console.log("add to favorites", this.artist.id) : console.log("remove from favorites", this.artist.id);

    // if (isFav) {
    // this.usersQuery.selectUserId$.pipe(switchMap(
    //   userId => {
    //     return isFav ?
    //       this.favoritesApiService.updateFavorites(this.userId, this.artist.id) :
    //       this.favoritesApiService.removeFromFavorites(this.userId, this.artist.id);
    //   }
    // )).subscribe(success => console.log("updated favs", success))
    const apiCall = isFav ?
      this.favoritesApiService.updateFavorites(this.userId, this.artist.id) :
      this.favoritesApiService.removeFromFavorites(this.userId, this.artist.id)
    apiCall.subscribe();
    this.openSnackBar(isFav)
  }

  openSnackBar(isFav: boolean): void {
    this.usersQuery.selectUserType$.subscribe(value => {
      // if (value === UserType.guest) {
      //   this._snackBar.openFromComponent(NoFavsPermissionSnackBarComponent, {
      //     duration: 2000,
      //   });
      // } else
        if (value !== UserType.guest) {
        isFav ? this._snackBar.openFromComponent(AddedToFavsSnackBarComponent, {
          duration: 2000,
        }) : this._snackBar.openFromComponent(RemovedFromFavsSnackBarComponent, {
          duration: 2000,
        })
      }
    })
  }

  deleteArtist(): void {
    this.artistsStoreService.deleteArtist(this.artist.id)
  }
}
