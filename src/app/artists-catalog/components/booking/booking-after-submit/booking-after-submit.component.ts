import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-booking-after-submit',
  templateUrl: './booking-after-submit.component.html',
  styleUrls: ['./booking-after-submit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingAfterSubmitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
