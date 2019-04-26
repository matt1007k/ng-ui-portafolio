import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { URL_SERVER } from "../../config/settings";
import { UsersService } from "../users/users.service";
import { Service } from "../../models/index.model";
import { map } from "rxjs/operators";

@Injectable()
export class ServicesService {
  token: string = "";
  constructor(private _http: HttpClient, private _usersService: UsersService) {
    this.token = this._usersService.getToken();
  }

  getAllByTitle() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });

    return this._http.get(`${URL_SERVER}/services/by-title`, {
      headers
    });
  }

  getAll(desde: number = 0, limit?: number) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });

    return this._http.get(`${URL_SERVER}/services?desde=${desde}`, {
      headers
    });
  }

  searchService(search: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this._http
      .get(`${URL_SERVER}/search/collection/services/${search}`, {
        headers
      })
      .pipe(map((res: any) => res.services));
  }

  createService(service: Service) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });
    return this._http.post(`${URL_SERVER}/services`, service, {
      headers
    });
  }

  updateService(service: Service, id: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });
    return this._http.put(`${URL_SERVER}/services/${id}`, service, {
      headers
    });
  }

  deleteService(id: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });
    return this._http.delete(`${URL_SERVER}/services/${id}`, {
      headers
    });
  }
}
