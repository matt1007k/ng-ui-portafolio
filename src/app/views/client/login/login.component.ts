import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/index.service';
import { Usuario } from 'src/app/models/index.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rememberme: boolean = false;

  error: boolean = false;
  message: string = '';

  constructor(
    private router: Router,
    public _userService: UsersService
  ) { }

  ngOnInit() {
  }

  handleSubmit(form: NgForm) {
    
    if (form.invalid) {
      return;
    }
    let user = new Usuario(null, form.value.email, form.value.password);
    this._userService.login(user)
      .subscribe((res: any) => {
        console.log(res)     
        if (!res.ok) {
          this.error = true;
          this.message = res.error.message
        }
        this.router.navigate(['/admin']);
      })
    
  }
}
