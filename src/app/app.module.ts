import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { LiquidacionesComponent } from './components/liquidaciones/liquidaciones.component';
import { ConsultasComponent } from './components/consultas/consultas.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    ProductosComponent,
    InicioComponent,
    NosotrosComponent,
    LiquidacionesComponent,
    ConsultasComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
