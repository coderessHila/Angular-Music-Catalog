import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {UserStoreService} from "../../users/services/user-store.service";
import {UsersQuery} from "../../users/user-state/user.query";
import {UserType} from "../../users/models/userType.enum";

@Component({
  selector: 'app-header-bar-catalog',
  templateUrl: './header-bar-catalog.component.html',
  styleUrls: ['./header-bar-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBarCatalogComponent implements OnInit {
  greeting$!: Observable<string>;


  constructor(private userStoreService:UserStoreService, private usersQuery:UsersQuery) { }

  ngOnInit(): void {
    // this.greeting$ = this.usersQuery.selectUserType$.pipe(map(
    //   //  getting "guest" | "registered" | "admin"
    //   (type: string) => {
    //     return type === UserType.guest ? "Hello guest" : 'Welcome back ' + 'name';
    //   }
    // ))
    // this.greeting$.subscribe(value => console.log(value))

    this.greeting$ = this.usersQuery.selectUser$.pipe(map(
      //  getting "guest" | "registered" | "admin"
      (user: Object) => {
        if ("user_type" in user) {
          //  @ts-ignore
          // return user.user_type === UserType.guest ? "Hello guest" : 'Welcome back ' + user.name;
          return user.user_type === UserType.guest ? "Hello guest" : user.name + '  ';
        } else {
          return ' ';
        }
      }
    ))
    this.greeting$.subscribe(value => console.log(value))
  }

  onLogOut() {
    this.userStoreService.logOut()
  }

}
