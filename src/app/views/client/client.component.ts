import { Component, OnInit } from "@angular/core";
import { NbMenuService } from "@nebular/theme";
import { itemsClient } from "./client.menu";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"]
})
export class ClientComponent implements OnInit {
  menu_items = itemsClient;
  title = "LM";
  anio = new Date().getFullYear();

  constructor(private nbMenuServices: NbMenuService) {}

  ngOnInit() {}
}
