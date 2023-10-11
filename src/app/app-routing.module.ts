import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a la página de inicio
  { path: 'inicio', component: ProductosComponent },  //Reemplaza 'InicioComponent' con el componente de inicio
  { path: 'nosotros',component: NosotrosComponent }, // Ruta para el componente "nosotros"
  // Agrega más rutas según sea necesario


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
