import { Component, OnInit } from '@angular/core';
import {UserStoreService} from "../users/services/user-store.service";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(private userStoreService:UserStoreService) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this.userStoreService.logOut()
  }

}
