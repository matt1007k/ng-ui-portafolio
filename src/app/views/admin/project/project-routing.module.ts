import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { ProjectComponent } from "./project.component";
import { ProjectListComponent } from "./project-list/project-list.component";

const routes: Routes = [
  {
    path: "",
    component: ProjectComponent,
    children: [
      {
        path: "",
        component: ProjectListComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
