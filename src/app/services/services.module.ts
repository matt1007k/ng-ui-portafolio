import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from './index.service';

const servicesApp = [
  UsersService
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [...servicesApp]
})
export class ServicesModule { }
