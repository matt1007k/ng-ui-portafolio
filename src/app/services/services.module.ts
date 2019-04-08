import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  UsersService,
  CategoriesService,
  ProjectsService
} from "./index.service";

const servicesApp = [UsersService, CategoriesService, ProjectsService];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...servicesApp]
})
export class ServicesModule {}
