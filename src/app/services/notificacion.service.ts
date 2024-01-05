import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificacionService {
  constructor(private snackBar: MatSnackBar) {}

  mostrarMensaje(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 5000, // Duración en milisegundos
    });
  }


mostrarMensajeError(mensaje: string): void {
  this.snackBar.open(mensaje, 'Mostrar', {
    duration: 5000,
  })
}


}