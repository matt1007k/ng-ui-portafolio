import { Component, OnInit, Input } from "@angular/core";
import { NbSidebarService, NbMenuService } from "@nebular/theme";
import { Router } from "@angular/router";
import { UsersService } from "../../../services/index.service";
import { filter, map } from "rxjs/operators";
@Component({
  selector: "app-navbar-admin",
  templateUrl: "./navbar-admin.component.html",
  styleUrls: ["./navbar-admin.component.scss"]
})
export class NavbarAdminComponent implements OnInit {
  @Input() titleh: string = "Admin";
  @Input("userAuth") user: any = {};

  userMenu = [
    { title: "Profile", icon: "nb-person" },
    { title: "Account Settings", icon: "nb-gear" },
    { title: "Log out", icon: "nb-power" }
  ];

  messages: { name: string; title: string }[] = [
    { name: "Carla Espinosa", title: "Nurse" },
    { name: "Bob Kelso", title: "Doctor of Medicine" },
    { name: "Janitor", title: "Janitor" },
    { name: "Perry Cox", title: "Doctor of Medicine" }
  ];

  notis: { name: string; title: string; created_at: string }[] = [
    {
      name: "Ben Sullivan",
      title: "Carpenter and photographer dasd...",
      created_at: "6:20PM"
    },
    { name: "Carla Espinosa", title: "Nurse", created_at: "6:20PM" },
    { name: "Bob Kelso", title: "Doctor of Medicine", created_at: "6:20PM" },
    { name: "Janitor", title: "Janitor", created_at: "6:20PM" },
    { name: "Perry Cox", title: "Doctor of Medicine", created_at: "6:20PM" }
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.menuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === "cmUserAuth"),
        map(({ item: { title } }) => title)
      )
      .subscribe(title => {
        if (title === "Log out") {
          this.logout();
        }
      });
  }

  toggleSidebar() {
    this.sidebarService.toggle(true);
    return false;
  }

  goToHome() {
    this.router.navigate(["/dashboard"]);
  }

  logout() {
    this.usersService.logout();
  }

  toggleNotifications() {}
}
