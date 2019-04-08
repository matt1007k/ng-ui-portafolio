import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { NebularModule } from "../../nebular.module";

import { ProjectComponent } from "./project.component";
import { ProjectCreateComponent } from "./project-create/project-create.component";
import { ProjectEditComponent } from "./project-edit/project-edit.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectRemoveComponent } from "./project-remove/project-remove.component";

import { ProjectRoutingModule } from "./project-routing.module";

const componentProj = [
  ProjectComponent,
  ProjectCreateComponent,
  ProjectEditComponent,
  ProjectRemoveComponent,
  ProjectListComponent
];

const entryComponentProj = [
  ProjectCreateComponent,
  ProjectEditComponent,
  ProjectRemoveComponent
];

@NgModule({
  declarations: [...componentProj],
  entryComponents: [...entryComponentProj],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NebularModule,
    ProjectRoutingModule
  ],
  exports: [...componentProj]
})
export class ProjectModule {}
