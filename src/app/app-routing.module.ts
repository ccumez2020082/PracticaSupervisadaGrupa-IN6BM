import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



//Importaciones de componentes
const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistrarComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'dashboard', component:DashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
