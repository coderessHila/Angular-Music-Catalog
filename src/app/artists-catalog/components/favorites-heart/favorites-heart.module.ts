import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesHeartComponent } from './favorites-heart.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    FavoritesHeartComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    FavoritesHeartComponent
  ]
})
export class FavoritesHeartModule { }
