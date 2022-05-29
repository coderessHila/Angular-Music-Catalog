import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorites-heart',
  templateUrl: './favorites-heart.component.html',
  styleUrls: ['./favorites-heart.component.scss']
})
export class FavoritesHeartComponent implements OnInit {
  @Input() checked?: boolean;
  @Output() onFavChange = new EventEmitter<boolean>()
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
    this.onFavChange.emit(this.checked)
  }
}
