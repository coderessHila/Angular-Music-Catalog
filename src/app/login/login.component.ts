import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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

  constructor(private router: Router, private formBuilder:FormBuilder) { }

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
  //  if validateUser()
  //   if (form.valid) {
  //  temporary for easy navigation while developing
    if (true) {
    this.validLogin()
    }
  }

  validLogin(){
    this.router.navigateByUrl('catalog/feed')
  }

}
