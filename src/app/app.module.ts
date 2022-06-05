import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FeedModule} from "./artists-catalog/components/feed/feed.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './app-components/page-not-found/page-not-found.component';
import { CatalogModule } from './artists-catalog/catalog.module';
import {NavBarModule} from "./app-components/nav-bar/nav-bar.module";
import { LoginModule } from './app-components/login/login.module';
import {MatButtonModule} from "@angular/material/button";
import {HeaderBarGuestModule} from "./app-components/header-bar-guest/header-bar-guest.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import {ArtistPageModule} from "./artists-catalog/components/artist-page/artist-page.module";
import {BookingModule} from "./artists-catalog/components/booking/booking.module";
import {MatNativeDateModule} from "@angular/material/core";
import {FavoritesModule} from "./artists-catalog/components/favorites/favorites.module";
import {HeaderBarCatalogModule} from "./app-components/header-bar-catalog/header-bar-catalog.module";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeedModule,
    NavBarModule,
    BrowserAnimationsModule,
    CatalogModule,
    LoginModule,
    MatButtonModule,
    HeaderBarGuestModule,
    ArtistPageModule,
    NgbModule,
    BookingModule,
    FavoritesModule,
    MatNativeDateModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    HeaderBarCatalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
