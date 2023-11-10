// carrito.service.ts

import { Injectable } from '@angular/core';
import { Media } from '../models/media';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private items: { media: Media; cantidad: number }[] = [];

  agregarAlCarrito(media: Media): void {
    const index = this.items.findIndex(item => item.media.id === media.id);

    if (index !== -1) {
      // Si el elemento ya está en el carrito, aumenta la cantidad
      this.items[index].cantidad++;
    } else {
      // Si el elemento no está en el carrito, agrégalo con cantidad 1
      this.items.push({ media, cantidad: 1 });
    }
  }

  eliminarDelCarrito(media: Media): void {
    const index = this.items.findIndex(item => item.media.id === media.id);

    if (index !== -1) {
      // Si la cantidad es mayor que 1, disminuye la cantidad
      if (this.items[index].cantidad > 1) {
        this.items[index].cantidad--;
      } else {
        // Si la cantidad es 1, elimina el elemento del carrito
        this.items.splice(index, 1);
      }
    }
  }

  vaciarCarrito(): void {
    this.items = [];
  }

  getItems(): { media: Media; cantidad: number }[] {
    return this.items;
  }



  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.media.precio * item.cantidad, 0);
  }


  constructor() { }
}
