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

    firstName: new FormControl(null),

    lastName: new FormControl(null),

    email: new FormControl(null),
    
    password: new FormControl(null),

  })


}
