import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersService, CategoriesService } from "./index.service";

const servicesApp = [UsersService, CategoriesService];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...servicesApp]
})
export class ServicesModule {}
