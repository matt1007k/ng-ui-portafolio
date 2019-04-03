import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ClientComponent } from "./client.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { PortafolioComponent } from "./portafolio/portafolio.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { GuestGuard } from "../../guards/guest-guard.service";

const rutas: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        data: { title: "MaxLearn" }
      },
      {
        path: "servicios",
        component: ServiciosComponent,
        data: { title: "Servicios" }
      },
      {
        path: "portafolio",
        component: PortafolioComponent,
        data: { title: "Portafolio" }
      },
      {
        path: "nosotros",
        component: AboutComponent,
        data: { title: "Nosotros" }
      },
      {
        path: "contacto",
        component: ContactoComponent,
        data: { title: "Contacto" }
      },
      {
        path: "login",
        component: LoginComponent,
        canActivate: [GuestGuard],
        data: { title: "Iniciar sesion" }
      },
      {
        path: "register",
        component: RegisterComponent,
        canActivate: [GuestGuard],
        data: { title: "Crear cuenta" }
      }
    ]
  },
  { path: "**", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
