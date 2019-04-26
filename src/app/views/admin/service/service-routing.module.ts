import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { ServiceComponent } from "./service.component";
import { ServiceListComponent } from "./service-list/service-list.component";

const rutas: Routes = [
  {
    path: "",
    component: ServiceComponent,
    children: [
      {
        path: "",
        component: ServiceListComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class ServiceRoutingModule {}
