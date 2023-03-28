import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(){}

  loginForm = new FormGroup({

    email: new FormControl('',
      [Validators.required, Validators.email]),

    password: new FormControl('',
      [Validators.required, Validators.pattern("^[A-Z][a-z0-9]{3,10}$")]),

  })
  loginSubmit(data:FormGroup){
    console.log(data)
  }

}
