import {Component, NgZone} from '@angular/core';
import { akitaDevtools } from '@datorama/akita';
import {map, Observable} from "rxjs";
import {UsersQuery} from "./users/user-state/user.query";
import {AuthGuardGuestsService} from "./artists-catalog/services/auth-guard-guests.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'music-artists-catalog';
  isUserRegistered$: Observable<boolean>;

  constructor(private ngZone: NgZone, private authGuardGuestsService:AuthGuardGuestsService) {

      akitaDevtools(ngZone);

    this.isUserRegistered$ = this.authGuardGuestsService.isUserRegistered()


  }
}
