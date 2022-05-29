import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hs-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss']
})
export class HeartComponent implements OnInit {

  @Input() id!:string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("click")
  }
}
