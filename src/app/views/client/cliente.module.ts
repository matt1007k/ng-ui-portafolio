import { NgModule } from "@angular/core";

import { NebularModule } from "../nebular.module";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";

import { NavbarClientComponent } from "../partials/navbar-client/navbar-client.component";
import { FooterClientComponent } from "../partials/footer-client/footer-client.component";

import { ClientComponent } from "./client.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ServiciosComponent } from "./servicios/servicios.component";
import { PortafolioComponent } from "./portafolio/portafolio.component";
import { ContactoComponent } from "./contacto/contacto.component";

const PAGES_COMPONENTS = [
  HomeComponent,
  NavbarClientComponent,
  FooterClientComponent,
  AboutComponent,
  ClientComponent,
  LoginComponent,
  RegisterComponent,
  ServiciosComponent,
  PortafolioComponent,
  ContactoComponent
];

@NgModule({
  declarations: [...PAGES_COMPONENTS],
  imports: [
    ClientRoutingModule,
    NebularModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...PAGES_COMPONENTS]
})
export class ClientModule {}
