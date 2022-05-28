import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderBarComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    HeaderBarComponent
  ]
})
export class HeaderBarModule { }
