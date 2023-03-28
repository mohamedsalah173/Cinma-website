import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor() {}

  registerForm = new FormGroup({

    firstName: new FormControl('',
      [Validators.minLength(3),Validators.maxLength(10), Validators.required]),

    lastName: new FormControl('',
      [Validators.minLength(3),Validators.maxLength(10), Validators.required]),

    email: new FormControl('',
      [Validators.required, Validators.email]),

    password: new FormControl('',
      [Validators.required, Validators.pattern("^[A-Z][a-z0-9]{3,10}$")]),

  })

registerSubmit(registerForm: FormGroup){
  console.log(registerForm);
  
}
}
