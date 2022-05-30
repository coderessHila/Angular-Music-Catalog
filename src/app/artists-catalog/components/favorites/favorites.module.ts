import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import {FeedModule} from "../feed/feed.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: FavoritesComponent }
];

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FavoritesComponent
  ]
})
export class FavoritesModule { }
