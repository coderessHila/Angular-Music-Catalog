import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hs-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
  // @Input() message! : string;
  // @Input() styleObj?: object;

  constructor() { }

  ngOnInit(): void {
  }

}
