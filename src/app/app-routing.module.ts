import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistPageComponent} from "./artist-page/artist-page.component";
import {FeedComponent} from "./feed/feed.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
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
export class AppRoutingModule { }
