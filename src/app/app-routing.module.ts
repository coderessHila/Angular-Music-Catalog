import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArtistPageComponent} from "./artists-catalog/components/artist-page/artist-page.component";
import {FeedComponent} from "./artists-catalog/components/feed/feed.component";
import {PageNotFoundComponent} from "./app-components/page-not-found/page-not-found.component";
import {CatalogComponent} from "./artists-catalog/catalog.component";
import {LoginComponent} from "./app-components/login/login.component";
import {BookingComponent} from "./artists-catalog/components/booking/booking.component";
import {FavoritesComponent} from "./artists-catalog/components/favorites/favorites.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'catalog',
    loadChildren: () => import('./artists-catalog/catalog.module').then(m => m.CatalogModule),
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: 'artist',
        component: ArtistPageComponent
        // loadChildren: () => import('./artist-page/artist-page.module').then(m => m.ArtistPageModule)
      },
      {
        path: 'booking',
        component: BookingComponent
      },
      {path: 'favorites',
      component: FavoritesComponent
      }

    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
