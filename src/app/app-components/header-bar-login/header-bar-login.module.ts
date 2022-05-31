import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarLoginComponent } from './header-bar-login.component';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    HeaderBarLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    HeaderBarLoginComponent
  ]
})
export class HeaderBarLoginModule { }
