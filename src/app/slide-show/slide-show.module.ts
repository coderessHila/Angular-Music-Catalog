import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideShowComponent } from './slide-show.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SlideShowComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    SlideShowComponent
  ]
})
export class SlideShowModule { }
