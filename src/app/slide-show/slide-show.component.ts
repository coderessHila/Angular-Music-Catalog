import {Component, OnInit} from '@angular/core';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

//
// @Component({
//   selector: 'app-slide-show',
//   templateUrl: './slide-show.component.html',
//   styleUrls: ['./slide-show.component.scss'],
//   providers: [NgbCarouselConfig]
// })
// export class SlideShowComponent implements OnInit {
//
//


//   ngOnInit(): void {
//   }
//
// }

@Component({selector: 'app-slide-show', templateUrl: './slide-show.component.html'})
export class SlideShowComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // images = ["https://wallpaperaccess.com/full/301267.jpg", "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Supremes-GettyImages-74001231.jpg", "https://wallpaperaccess.com/full/301267.jpg", "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Supremes-GettyImages-74001231.jpg"]
}

