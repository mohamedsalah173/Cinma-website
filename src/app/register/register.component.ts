import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor( private _router:Router) {}

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
  this._router.navigate(['/login']);
  
}
}
