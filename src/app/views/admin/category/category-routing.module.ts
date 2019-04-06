import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { CategoryComponent } from "./category.component";
import { CategoryListComponent } from "./category-list/category-list.component";

const rutas: Routes = [
  {
    path: "",
    component: CategoryComponent,
    children: [
      {
        path: "",
        component: CategoryListComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
