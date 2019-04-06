import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { UsersService } from "../services/index.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _usersService: UsersService, private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this._usersService.isAuthenticated()) {
      console.log(this._usersService.isAuthenticated());
      return true;
    }

    this._router.navigate(["/login"]);
    return false;
  }
}
