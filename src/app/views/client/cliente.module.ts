import { NgModule } from "@angular/core";

import { NebularModule } from '../nebular.module';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from "./client-routing.module";

import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarClientComponent } from '../partials/navbar-client/navbar-client.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const PAGES_COMPONENTS = [
    HomeComponent,
    AboutComponent,
    ClientComponent,
    NavbarClientComponent,
    LoginComponent,
    RegisterComponent
]


@NgModule({
    declarations: [...PAGES_COMPONENTS],
    imports: [
        ClientRoutingModule,
        NebularModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...PAGES_COMPONENTS
    ]
})

export class ClientModule {}