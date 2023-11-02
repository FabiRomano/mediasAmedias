import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { LiquidacionesComponent } from './components/liquidaciones/liquidaciones.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a la página de inicio
  { path: 'inicio', component: InicioComponent },  //Reemplaza 'InicioComponent' con el componente de inicio
  { path: 'nosotros',component: NosotrosComponent }, // Ruta para el componente "nosotros"
  // Agrega más rutas según sea necesario
  { path: 'novedades',component: ProductosComponent},
  { path: 'liquidaciones',component: LiquidacionesComponent},
  { path: 'consultas',component: ConsultasComponent},
  { path: 'login',component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
