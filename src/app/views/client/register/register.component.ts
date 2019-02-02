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
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      conditions: new FormControl(false),
    }, { validators: [this.passwordConfirmation('password', 'password2'), this.acceptCondi('conditions')] })
    
    this.form.setValue({
      name: 'Test ',
      email: 'test1@example.com',
      password: '123456',
      password2: '123456',
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
      this.form.value.name,
      this.form.value.email,
      this.form.value.password
    );

    this.usersService.registerUser(user)
      .subscribe(res => {
          this._router.navigate(['/login'])
      })
    
  }

}
