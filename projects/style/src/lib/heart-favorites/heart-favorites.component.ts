import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-heart-favorites',
  templateUrl: './heart-favorites.component.html',
  styleUrls: ['./heart-favorites.component.scss']
})
export class HeartFavoritesComponent implements OnInit {

  checked: boolean = false;
  checkedImg = "../../src/assets/favicons/heart_icon/fav_full.png"
  uncheckedImg = "../../src/assets/favicons/heart_icon/fav_empty.png"
  displayImg: string = this.setImg(this.checked)

  constructor() { }

  ngOnInit(): void {
  }

  setImg (isChecked:boolean) {
    return isChecked ? this.checkedImg : this.uncheckedImg;
  }

}
