import { Component, OnInit } from '@angular/core';
import {UsersStateService} from "../services/users-state.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private usersStateService:UsersStateService) { }

  ngOnInit(): void {

  }

}
