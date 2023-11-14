// carrito.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Media } from 'src/app/models/media';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  items: { media: Media; cantidad: number }[] = []; // Inicializamos como un arreglo vacío



  constructor(
    public dialogRef: MatDialogRef<CarritoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private carritoService: CarritoService
  ) 
  
  {
    this.actualizarCarrito();
  }

  // Método para cerrar el carrito (y por ende, el modal)
  cerrarCarrito(): void {
    this.dialogRef.close();
  }

  // Método para eliminar un producto del carrito
  eliminarDelCarrito(media: Media): void {
    // Verifica si media y media.id son definidos
    if (media && media.id) {
      this.carritoService.eliminarDelCarrito(media);
      this.actualizarCarrito();  // Actualiza los elementos del carrito
      console.log('Eliminando del carrito:', media);
    } else {
      console.error('El objeto media o su propiedad id es indefinido.');
    }


  }

  // Método para calcular el total del carrito
  calcularTotal(): number {
    return this.carritoService.calcularTotal();
  }

  private actualizarCarrito(): void {
    this.items = this.carritoService.getItems();
  }

  // Método para vaciar el carrito
  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito();
    this.actualizarCarrito();  // Actualiza los elementos del carrito
  }



// Método para calcular el total por artículo
calcularTotalPorItem(item: any): number {
  return item.media.precio * item.cantidad;
}



 // Método para sumar un artículo al carrito
 sumarAlCarrito(media: Media): void {
  // Verifica si media y media.id son definidos
  if (media && media.id) {
    // Encuentra el índice del artículo en el carrito
    const index = this.items.findIndex(item => item.media.id === media.id);

    // Si el artículo está en el carrito, aumenta la cantidad
    if (index !== -1) {
      this.items[index].cantidad++;

      // Llama al método en el servicio para actualizar el carrito
      this.carritoService.actualizarCarrito(this.items);

      // Puedes agregar más lógica aquí, como mostrar un mensaje de éxito
      console.log(`Se agregó un ${media.name} al carrito. Cantidad actual: ${this.items[index].cantidad}`);
    } else {
      // Si el artículo no está en el carrito, puedes manejarlo de la manera que prefieras
      console.warn(`El artículo ${media.name} no está en el carrito.`);
    }
  } else {
    console.error('El objeto media o su propiedad id es indefinido.');
  }
}







}
