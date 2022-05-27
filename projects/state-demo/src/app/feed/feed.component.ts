import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";
import {UsersStateService} from "../services/users-state.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  users!: User[];

  constructor(private usersStateService:UsersStateService) { }

  ngOnInit(): void {
    this.usersStateService.setUsers()
  }

}
