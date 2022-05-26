import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {SideBarModule} from "../side-bar/side-bar.module";
import {NavBarModule} from "../nav-bar/nav-bar.module";
import {FeedModule} from "../feed/feed.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ArtistsStateManagementService} from "./catalog-services/artists-state-management.service";



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    SideBarModule,
    NavBarModule,
    FeedModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[ArtistsStateManagementService]
})
export class CatalogModule { }
