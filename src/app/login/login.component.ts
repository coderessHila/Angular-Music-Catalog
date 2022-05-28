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

  hsLoginForm: FormGroup = this.formBuilder.group({
    username: ['Hila', Validators.required],
    password: [undefined, Validators.required]
  })

  onSubmit(form: FormGroup) {
    console.log(form.value)
  //  if validateUser()
  //  temporary
    if (false) {
    this.validLogin()
    }
  }

  validLogin(){
    this.router.navigateByUrl('catalog/feed')
  }

}
