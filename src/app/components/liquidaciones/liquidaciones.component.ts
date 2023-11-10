import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Media } from 'src/app/models/media';
import { MediaService } from 'src/app/services/medias.service';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from 'src/app/services/carrito.service';



@Component({
  selector: 'app-liquidaciones',
  templateUrl: './liquidaciones.component.html',
  styleUrls: ['./liquidaciones.component.css']
})
export class LiquidacionesComponent implements OnInit  {
  medias: Media[] = [];

  constructor(private mediasService: MediaService ,
     private router: Router, public dialog: MatDialog,
     private carritoService: CarritoService) {}

  //api personal
  ngOnInit(): void {
    this.mediasService.getMedias()
      .subscribe(medias => {
        this.medias = medias;
      });
      console.log(this.medias)

     
  }

//scroll para ir al inicio
  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  goToInicio() {
    this.router.navigate(['/inicio']);
  }



//modal del carrito

abrirCarrito(): void {
  const dialogRef = this.dialog.open(CarritoComponent, {
    width: '250px', // Ajusta el ancho del modal según sea necesario
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
