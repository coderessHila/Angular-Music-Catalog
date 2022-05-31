import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarCatalogComponent } from './header-bar-catalog.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    HeaderBarCatalogComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    HeaderBarCatalogComponent
  ]
})
export class HeaderBarCatalogModule { }
