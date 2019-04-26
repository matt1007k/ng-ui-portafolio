import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { ServiceRoutingModule } from "./service-routing.module";
import { NebularModule } from "../../nebular.module";

import { ServiceComponent } from "./service.component";
import { ServiceListComponent } from "./service-list/service-list.component";
import { ServiceCreateComponent } from "./service-create/service-create.component";
import { ServiceEditComponent } from "./service-edit/service-edit.component";
import { ServiceRemoveComponent } from "./service-remove/service-remove.component";

const componentCate = [
  ServiceComponent,
  ServiceListComponent,
  ServiceCreateComponent,
  ServiceEditComponent,
  ServiceRemoveComponent
];

const entryComponentCate = [
  ServiceCreateComponent,
  ServiceEditComponent,
  ServiceRemoveComponent
];

@NgModule({
  declarations: [...componentCate],
  entryComponents: [...entryComponentCate],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    NebularModule,
    ReactiveFormsModule
  ],
  exports: [...componentCate]
})
export class ServiceModule {}
