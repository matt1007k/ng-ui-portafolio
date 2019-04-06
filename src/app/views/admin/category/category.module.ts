import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { CategoryRoutingModule } from "./category-routing.module";
import { NebularModule } from "../../nebular.module";

import { CategoryComponent } from "./category.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryCreateComponent } from "./category-create/category-create.component";
import { CategoryEditComponent } from "./category-edit/category-edit.component";
import { CategoryRemoveComponent } from "./category-remove/category-remove.component";

const componentCate = [
  CategoryComponent,
  CategoryListComponent,
  CategoryCreateComponent,
  CategoryEditComponent,
  CategoryRemoveComponent
];

const entryComponentCate = [
  CategoryCreateComponent,
  CategoryEditComponent,
  CategoryRemoveComponent
];

@NgModule({
  declarations: [...componentCate],
  entryComponents: [...entryComponentCate],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NebularModule,
    ReactiveFormsModule
  ],
  exports: [...componentCate]
})
export class CategoryModule {}
