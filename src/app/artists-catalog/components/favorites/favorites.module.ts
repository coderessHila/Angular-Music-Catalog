import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import {FeedModule} from "../feed/feed.module";



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FeedModule
  ],
  exports: [
    FavoritesComponent
  ]
})
export class FavoritesModule { }
