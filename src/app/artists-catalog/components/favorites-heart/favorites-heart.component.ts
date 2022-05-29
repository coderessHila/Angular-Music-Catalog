import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorites-heart',
  templateUrl: './favorites-heart.component.html',
  styleUrls: ['./favorites-heart.component.scss']
})
export class FavoritesHeartComponent implements OnInit {
  @Input() checked?: boolean;
  heartColor: "primary" | "warn" = "primary";

  constructor() { }

  ngOnInit(): void {
    if (this.checked) {
      this.heartColor = "warn"
    }
  }

  onClick() {
    this.checked = !this.checked
    this.heartColor = this.checked ? "warn" : "primary"

  }
}
