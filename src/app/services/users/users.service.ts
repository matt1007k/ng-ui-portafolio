import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Usuario } from "../../models/index.model";

import { URL_SERVER } from "src/app/config/settings";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(public http: HttpClient, private router: Router) {}

  registerUser(user: Usuario) {
    return this.http.post(`${URL_SERVER}/auth/register`, user, {
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  login(user: Usuario, recordar: boolean = false) {
    return this.http
      .post(`${URL_SERVER}/auth/login`, user, {
        observe: "body",
        headers: new HttpHeaders().append("Content-Type", "application/json")
      })
      .pipe(
        map((res: any) => {
          const token = res.token;
          const usuario = JSON.stringify(res.usuario);

          localStorage.setItem("token", token);
          localStorage.setItem("user", usuario);

          return true;
        })
      );
  }

  logout() {
    localStorage.setItem("token", null);
    localStorage.setItem("user", null);
    this.router.navigate(["/login"]);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem("token") !== null;
  }

  getAuth(): Usuario {
    const user = JSON.parse(localStorage.getItem("user"));

    return user;
  }

  // API DJANGO

  // registerUser(user: Usuario) {
  //   return this.http.post(`${URL_SERVER}/rest-auth/registration/`, user, {
  //     headers: new HttpHeaders().append("Content-Type", "application/json")
  //   });
  // }
  // login(user: Usuario, recordar: boolean = false) {
  //   return this.http.post(`${URL_SERVER}/rest-auth/login/`, user, {
  //     observe: "body",
  //     headers: new HttpHeaders().append('Content-Type',  'application/json')
  //   }).pipe(
  //     map((res: any) => {
  //       const token = res.key;
  //       localStorage.setItem('token', token)
  //       return true;
  //     })
  //   );
  //   /*
  //     const token = res.data.key
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: token
  //     }
  //   */
  // }
}
