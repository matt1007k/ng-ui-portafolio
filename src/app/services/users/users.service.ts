import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from '../../models/index.model'

import { URL_SERVER } from 'src/app/config/settings';

@Injectable({
  providedIn: 'root'
})
export class UsersService {  

  constructor(
    public http: HttpClient
  ) { }

  registerUser(user: Usuario) {
    
    return this.http.post(`${URL_SERVER}/rest-auth/registration/`, user);
  }

  login(user: Usuario, recordar: boolean = false) {
    return this.http.post(`${URL_SERVER}/rest-auth/login/`, user, {
      observe: "body",
      headers: new HttpHeaders().append('Content-Type',  'application/json')
    });
    /*
      const token = res.data.key
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    */
  }
}
