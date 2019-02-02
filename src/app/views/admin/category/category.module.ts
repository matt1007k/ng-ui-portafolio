import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryComponent } from './category.component';

const componentCate = [
  CategoryComponent,
  CategoryListComponent,
  CategoryCreateComponent
]

@NgModule({
  declarations: [...componentCate],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  exports: [...componentCate]
})
export class CategoryModule { }
