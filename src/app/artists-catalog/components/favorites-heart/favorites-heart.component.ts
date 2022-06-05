import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorites-heart',
  templateUrl: './favorites-heart.component.html',
  styleUrls: ['./favorites-heart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesHeartComponent implements OnInit {
  @Input() checked?: boolean;
  @Input() isDisabled?: boolean;
  @Output() onFavChange = new EventEmitter<boolean>()
  heartColor: "default" | "warn" = "default";

  constructor() { }

  ngOnInit(): void {
    if (this.checked) {
      this.heartColor = "warn"
    }
  }

  onClick() {
    this.checked = !this.checked
    this.heartColor = this.checked ? "warn" : "default"
    this.onFavChange.emit(this.checked)
  }
}
