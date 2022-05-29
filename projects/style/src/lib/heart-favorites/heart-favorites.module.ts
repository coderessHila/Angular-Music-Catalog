import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeartFavoritesComponent } from './heart-favorites.component';



@NgModule({
  declarations: [
    HeartFavoritesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeartFavoritesComponent
  ]
})
export class HeartFavoritesModule { }
