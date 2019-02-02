import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


import { ClientComponent } from "./client.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const rutas: Routes = [
    {
        path: '',
        component: ClientComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                data: { title: 'MaxLearn' }
            },
            {
                path: 'nosotros',
                component: AboutComponent,
                data: { title: 'Nosotros' }
            },
            {
                path: 'login',
                component: LoginComponent,
                data: { title: 'Iniciar sesion' }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: { title: 'Crear cuenta' }
            }
        ]
    },
    { path: '**', redirectTo: '/' }
]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})

export class ClientRoutingModule {}