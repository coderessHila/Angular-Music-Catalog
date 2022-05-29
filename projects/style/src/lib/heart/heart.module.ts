import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeartComponent } from './heart.component';



@NgModule({
  declarations: [
    HeartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeartComponent]
})
export class HeartModule { }
