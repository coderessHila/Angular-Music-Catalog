import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserApiService} from "../users/services/user-api.service";
import {tap} from "rxjs";
import {UserStoreService} from "../users/services/user-store.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = "Welcome!";

  @Input() user = {username:'', password: ''}
  // loginForm = new FormGroup({
  //     username: new FormControl(''),
  //     password: new FormControl(null),
  //   }
  // )

  constructor(private router: Router, private formBuilder:FormBuilder, private userApiService:UserApiService, private userStoreService:UserStoreService) { }

  loginForm: FormGroup = this.formBuilder.group({
    username: [""],
    password: [""]
  })

  ngOnInit(): void {
  }

  // not needed in login page, will use in register page
  // passwordValidators = [Validators.required,Validators.minLength(2)];
  userValidators = [Validators.required];
  passwordValidators = [Validators.required];
  hsLoginForm: FormGroup = this.formBuilder.group({
    username: [undefined],
    password: [undefined, this.passwordValidators]
  })

  onSubmit(form: FormGroup) {
    console.log(form.value)
    console.log(form.valid)
    if (form.valid) {
    this.userApiService.validateUser(form.value).pipe(tap(
      users => {
        if (users.length) {
          console.log("setting validated user in store")
          this.userStoreService.setUser(true, users[0])
          this.validLogin()
        } else {
          alert("please try again")
        }
      }
    )).subscribe(value=>console.log("current user", value))
    }
  }

  validLogin(){
    this.router.navigateByUrl('catalog/feed')
  }

}
