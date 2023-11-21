
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
import { CarritoService } from './carrito.service';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
    private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private carritoService: CarritoService) {}

   createPedido(pedido: Pedido): Observable<any> {
     return this.http.post(`${this.apiUrl}/pedidos/create`, pedido);
  }

 
    // Método para enviar el pedido

    enviarPedido(datosPedido: any): void {
      this.http.post(`${this.apiUrl}/pedidos/create`, datosPedido)
        .subscribe(
          (respuesta: any) => {
            // Obtiene la fecha y hora desde la respuesta
            const fechaYHora: string = respuesta.fechaYHora;
    
            // Formatea la fecha y hora como desees
            const fechaFormateada = new Date(fechaYHora).toLocaleString();
    
            // Puedes usar fechaFormateada como necesites
            console.log('Pedido enviado con éxito. Fecha y hora:', fechaFormateada);
    
            // Después de que el pedido se haya enviado exitosamente
            // Limpiar el carrito
            this.carritoService.vaciarCarrito();
          },
          (error) => {
            console.error('Error al enviar el pedido:', error);
            // Puedes manejar el error de la manera que prefieras
          }
        );
    }
  }    
