import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

import { URL_SERVER } from "../../config/settings";
import { UsersService } from "../users/users.service";
import { Project } from "../../models/index.model";

@Injectable()
export class ProjectsService {
  token: string = "";
  constructor(private _http: HttpClient, private _usersService: UsersService) {
    this.token = _usersService.getToken();
  }

  getAll(desde: number = 0) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });
    return this._http.get(`${URL_SERVER}/projects?desde=${desde}`, {
      headers
    });
  }

  searchProject(search: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this._http
      .get(`${URL_SERVER}/search/collection/projects/${search}`, { headers })
      .pipe(map((res: any) => res.projects));
  }

  createProject(project: Project) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });

    return this._http.post(`${URL_SERVER}/projects`, project, { headers });
  }

  updateProject(project: Project, id: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });
    return this._http.put(`${URL_SERVER}/projects/${id}`, project, { headers });
  }

  deleteProject(id: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      token: this.token
    });

    return this._http.delete(`${URL_SERVER}/projects/${id}`, { headers });
  }
}
