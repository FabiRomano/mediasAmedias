import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from 'src/app/services/medias.service';
import { Media } from 'src/app/models/media';
import { MatDialog } from '@angular/material/dialog';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from 'src/app/services/carrito.service';
import { ModalAgregarEditarComponent } from '../modal-agregar-editar/modal-agregar-editar.component';
import { HttpErrorResponse } from '@angular/common/http';






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


//logica para abrir modal de nuevos productos

abrirModalAgregar(): void {
  const dialogRef = this.dialog.open(ModalAgregarEditarComponent, {
    data: { media: null },  // Pasa media como nulo para agregar
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('El modal se cerró:', result);
    // Puedes agregar lógica adicional si es necesario
  });
}






//logica para abrir modal y editar productos


editarProducto(media: Media): void {
  const dialogRef = this.dialog.open(ModalAgregarEditarComponent, {
    data: { media: media },  // Pasa la media existente para editar
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('El modal se cerró:', result);
    // Puedes agregar lógica adicional si es necesario
  });
}




public eliminarProducto(id: number): void {
  this.mediasService.deleteMedia (id).subscribe({
    next: () => {
      alert('Se elimino correctamente');
      this.router.navigate(['']);
      console.log(JSON.stringify(id));
      
    },
    error: (error: HttpErrorResponse) => {
      alert('No se pudo eliminar');
      this.router.navigate(['']);
      console.log(JSON.stringify(id));

    }
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






