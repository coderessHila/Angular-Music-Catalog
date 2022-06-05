import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarGuestComponent } from './header-bar-guest.component';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatChipsModule} from "@angular/material/chips";



@NgModule({
  declarations: [
    HeaderBarGuestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule
  ],
  exports: [
    HeaderBarGuestComponent
  ]
})
export class HeaderBarGuestModule { }
