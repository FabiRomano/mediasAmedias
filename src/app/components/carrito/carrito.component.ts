// carrito.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Media } from 'src/app/models/media';
import { Pedido } from 'src/app/models/pedido';
import { CarritoService } from 'src/app/services/carrito.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  items: { media: Media; cantidad: number }[] = []; // Inicializamos como un arreglo vacío
  // Supongamos que ya tienes estas variables en tu componente
  nombreComprador: string = ''; // Inicializadas aquí
  telefonoComprador: string = '';




  constructor(
    public dialogRef: MatDialogRef<CarritoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private carritoService: CarritoService,
    private pedidoService: PedidoService
  ) 
  
  {
    this.actualizarCarrito();
  }

// Método para finalizar la compra
finalizarCompra(): void {
  // Verificar si tienes un nombre y teléfono del comprador
  if (!this.nombreComprador || !this.telefonoComprador) {
    console.error('Debe ingresar el nombre y el teléfono del comprador.');
    // Puedes agregar lógica adicional, como mostrar un mensaje de error
    return;
  }

  // Calcular el total
  const totalCompra = this.calcularTotal();

  // Construir los datos del pedido
  const datosPedido = {
    date: new Date().toISOString(),
  //  clienteId: 1, // Ajusta según sea necesario
    //mediasId: 2, // Ajusta según sea necesario
    informacionCarrito: JSON.stringify(this.items), // Convertir a cadena JSON
    nombreComprador: this.nombreComprador,
    telefonoComprador: this.telefonoComprador,
    total: totalCompra,
  };

  // Llamar al servicio de pedidos para enviar el pedido
  this.pedidoService.enviarPedido(datosPedido);

  // Cerrar el carrito después de enviar el pedido
  this.cerrarCarrito();
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
