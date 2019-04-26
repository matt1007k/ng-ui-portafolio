import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  UsersService,
  CategoriesService,
  ProjectsService,
  ServicesService
} from "./index.service";

const servicesApp = [
  UsersService,
  CategoriesService,
  ProjectsService,
  ServicesService
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...servicesApp]
})
export class ServicesModule {}
