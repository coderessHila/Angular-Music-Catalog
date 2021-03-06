import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from "./catalog.component";
import {FeedComponent} from "./components/feed/feed.component";
import {ArtistPageComponent} from "./components/artist-page/artist-page.component";
import {BookingComponent} from "./components/booking/booking.component";
import {FavoritesComponent} from "./components/favorites/favorites.component";
import {AuthGuardGuestsService} from "./services/auth-guard-guests.service";
import {CompareComponent} from "./components/compare/compare.component";

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: 'artist',
        component: ArtistPageComponent
      },
      {
        path: 'compare',
        component: CompareComponent
      },
      {
        path: 'booking',
        loadChildren: () => import('./components/booking/booking.module').then(m => m.BookingModule),
        canLoad: [AuthGuardGuestsService],
        canActivate: [AuthGuardGuestsService]
      },
      {path: 'favorites',
        loadChildren: () => import('./components/favorites/favorites.module').then(m => m.FavoritesModule),
        canLoad: [AuthGuardGuestsService],
        canActivate: [AuthGuardGuestsService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {
}
