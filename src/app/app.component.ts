import {Component, NgZone} from '@angular/core';
import { akitaDevtools } from '@datorama/akita';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-catalog';
  obj = {
    1: "asd",
    2: "sdfdsav"
  }
  constructor(private ngZone: NgZone) {

      akitaDevtools(ngZone);


  }
}
