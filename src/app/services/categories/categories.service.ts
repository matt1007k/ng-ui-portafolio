import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { URL_SERVER } from "../../config/settings";
import { UsersService } from "../users/users.service";
import { Category } from "src/app/models/index.model";
import { map } from "rxjs/operators";

@Injectable()
export class CategoriesService {
  token: string = "";
  constructor(private _http: HttpClient, private _usersService: UsersService) {
    this.token = this._usersService.getToken();
  }

  getAll(desde: number = 0, limit?: number) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });

    return this._http.get(`${URL_SERVER}/categories?desde=${desde}`, {
      headers
    });
  }

  searchCategory(search: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this._http
      .get(`${URL_SERVER}/search/collection/categories/${search}`, {
        headers
      })
      .pipe(map((res: any) => res.categories));
  }

  createCategory(category: Category) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });
    return this._http.post(`${URL_SERVER}/categories`, category, {
      headers
    });
  }

  updateCategory(category: Category, id: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });
    return this._http.put(`${URL_SERVER}/categories/${id}`, category, {
      headers
    });
  }

  deleteCategory(id: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });
    return this._http.delete(`${URL_SERVER}/categories/${id}`, {
      headers
    });
  }
}
