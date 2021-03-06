import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserStoreService} from "../../users/services/user-store.service";
import {UsersQuery} from "../../users/user-state/user.query";
import {map, Observable} from "rxjs";
import {UserType} from "../../users/models/userType.enum";
import {User} from "../../users/models/user.interface";

@Component({
  selector: 'app-header-bar-guest',
  templateUrl: './header-bar-guest.component.html',
  styleUrls: ['./header-bar-guest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBarGuestComponent implements OnInit {

  constructor(private userStoreService:UserStoreService, private usersQuery:UsersQuery) { }

  ngOnInit(): void {
    // this.greeting$ = this.usersQuery.selectUserType$.pipe(map(
    // //  getting "guest" | "registered" | "admin"
    //   (type: string) => {
    //     return type === UserType.guest ? "Hello guest" : 'Welcome back ' + 'name';
    //   }
    // ))
    this.greeting$ = this.usersQuery.selectUser$.pipe(map(
    //  getting "guest" | "registered" | "admin"
      (user: Object) => {
        if ("user_type" in user) {
        //  @ts-ignore
        return user.user_type === UserType.guest ? "Hello guest" : 'Welcome back ' + user.name;
        } else {
          return ' ';
        }
      }
    ))
    this.greeting$.subscribe(value => console.log(value))
  }

  greeting$!: Observable<string>;

  onLogOut() {
    this.userStoreService.logOut()
  }

}
