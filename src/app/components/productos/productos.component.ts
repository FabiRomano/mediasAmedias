import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from 'src/app/services/medias.service';
import { Media } from 'src/app/models/media';
import { MatDialog } from '@angular/material/dialog';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from 'src/app/services/carrito.service';






@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  //conecto api de prueba
  medias: Media[] = [];

  constructor(private mediasService: MediaService ,
     private router: Router , public dialog: MatDialog,
     private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.mediasService.getMedias()
      .subscribe(medias => {
        this.medias = medias;
      });
      console.log(this.medias)

     
  }


  //regreso al inicio
  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  
  goToInicio() {
    this.router.navigate(['/inicio']);
  }


//modal del carrito

abrirCarrito(): void {
  const dialogRef = this.dialog.open(CarritoComponent, {
    // width: '300px', // Ajusta el ancho del modal según sea necesario
    // panelClass: 'carrito-container', // Agrega la clase al contenedor del carrito
    

  });
}


//logica para agregar o eliminar ´productos del carrito

  agregarAlCarrito(media : Media): void {
    this.carritoService.agregarAlCarrito(media);
    console.log("agregar al carrito");
  }

  eliminarDelCarrito(media: Media): void{
    this.carritoService.eliminarDelCarrito(media);
    console.log("eliminar del carrito");
  }







}







