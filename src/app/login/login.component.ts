import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() user = {username:'', password: ''}
  loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(null),
    }
  )

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    console.log(form.value)
  //  if validateUser()
    this.validLogin()
  }

  validLogin(){
    this.router.navigateByUrl('catalog/feed')
  }

}
