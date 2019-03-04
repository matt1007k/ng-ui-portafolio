import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UsersService } from "src/app/services/index.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  rememberme: boolean = false;

  error: boolean = false;
  messages: any = [];

  constructor(private router: Router, public _userService: UsersService) {}

  ngOnInit() {}

  handleSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let user: any = {
      email: form.value.email,
      password: form.value.password
    };
    this._userService.login(user).subscribe(
      (res: any) => this.router.navigate(["/admin"]),
      error => {
        this.error = true;
        this.messages = error.error.message;
        console.log(error);
      }
    );
  }
}
