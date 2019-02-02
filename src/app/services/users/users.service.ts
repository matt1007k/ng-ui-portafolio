import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post(`${URL_SERVER}/auth/register`, user);
  }

  login(user: Usuario, recordar: boolean = false) {
    
    return this.http.post(`${URL_SERVER}/auth/login`, user);
  }
}
