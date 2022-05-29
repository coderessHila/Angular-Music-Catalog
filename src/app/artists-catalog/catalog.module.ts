import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {NavBarModule} from "../app-components/nav-bar/nav-bar.module";
import {FeedModule} from "./components/feed/feed.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ArtistsStoreService} from "./services/artists-store.service";



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    NavBarModule,
    FeedModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[ArtistsStoreService]
})
export class CatalogModule { }