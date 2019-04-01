import { Component, OnInit, Input } from "@angular/core";
import { NbSidebarService, NbMenuService } from "@nebular/theme";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar-client",
  templateUrl: "./navbar-client.component.html",
  styleUrls: ["./navbar-client.component.scss"]
})
export class NavbarClientComponent implements OnInit {
  @Input() items: any;
  @Input() title: string;

  @Input() position = "normal";

  menuOpen: boolean = false;

  user: any;

  userMenu = [{ title: "Profile" }, { title: "Log out" }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private router: Router
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToHome() {
    this.router.navigate(["/"]);
  }
}
