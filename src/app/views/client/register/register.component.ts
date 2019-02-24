import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../../../services/index.service';
import { Usuario } from 'src/app/models/index.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  error: boolean = false;
  messages: any = [];

  constructor(
    public usersService: UsersService,
    public _router: Router
  ) { }

  // validation custom
  passwordConfirmation(field1: string, field2: string) {
    return (group: FormGroup) => {
      let pass1 = group.controls[field1].value;
      let pass2 = group.controls[field2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        passwordConfirmation: true
      }
    }
  }

  acceptCondi(field: string) {
    return (group: FormGroup) => {
      let condition = group.controls[field].value;

      if (condition === true) {
        return null;
      }

      return {
        acceptCondi: true
      }
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password1: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      conditions: new FormControl(false),
    }, { validators: [this.passwordConfirmation('password1', 'password2'), this.acceptCondi('conditions')] })
    
    this.form.setValue({
      username: 'test',
      email: 'test@gmail.com',
      password1: 'test123456',
      password2: 'test123456',
      conditions: true
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  registerUser() {
    if (this.form.invalid) {
      return;
    }
    let user = new Usuario(
      this.form.value.username,
      this.form.value.email,
      this.form.value.password1,
      this.form.value.password2
    );

    this.usersService.registerUser(user)
      .subscribe(
        res => this._router.navigate(['/admin']),
        error => {
          this.error = true;
          this.messages = error.error
          console.log(this.messages);
          
        }        
      )
    
  }

}
