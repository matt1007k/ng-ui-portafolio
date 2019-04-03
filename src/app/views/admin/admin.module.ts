import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";

import { NebularModule } from "../nebular.module";

import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProjectComponent } from "./project/project.component";
import { NavbarAdminComponent } from "../partials/navbar-admin/navbar-admin.component";

import { AuthGuard } from "../../guards/auth-guard.service";
import { RoleGuard } from "../../guards/role-guard.service";

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProjectComponent,
    NavbarAdminComponent
  ],
  imports: [AdminRoutingModule, NebularModule, CommonModule],
  providers: [AuthGuard, RoleGuard],
  exports: [AdminComponent, DashboardComponent, ProjectComponent]
})
export class AdminModule {}
