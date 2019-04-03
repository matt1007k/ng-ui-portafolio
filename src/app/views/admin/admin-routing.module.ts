import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProjectComponent } from "./project/project.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "../../guards/auth-guard.service";
import { RoleGuard } from "../../guards/role-guard.service";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: "ROL_ADMIN" },
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: {
          title: "Dashboard"
        }
      },
      {
        path: "categorias",
        loadChildren: "./category/category.module#CategoryModule"
      },
      {
        path: "proyectos",
        component: ProjectComponent
      }
    ]
  },
  { path: "dashboard", redirectTo: "/admin/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
