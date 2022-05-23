import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FeedModule} from "./feed/feed.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CatalogModule } from './catalog/catalog.module';
import {NavBarModule} from "./nav-bar/nav-bar.module";
import {SideBarModule} from "./side-bar/side-bar.module";
import { LoginModule } from './login/login.module';
import {MatButtonModule} from "@angular/material/button";


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
    SideBarModule,
    BrowserAnimationsModule,
    CatalogModule,
    LoginModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
