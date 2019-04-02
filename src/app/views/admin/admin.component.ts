import { Component, OnInit } from "@angular/core";
import { itemsAdmin } from "./admin.menu";
import { UsersService } from "../../services/index.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styles: []
})
export class AdminComponent implements OnInit {
  title = "PortAdmin";

  menu_items = itemsAdmin;

  userAuth: any = {};

  constructor(private _usersService: UsersService) {}

  ngOnInit() {
    this.userAuth = this._usersService.getAuth();

    console.log(this.userAuth);
  }
}
