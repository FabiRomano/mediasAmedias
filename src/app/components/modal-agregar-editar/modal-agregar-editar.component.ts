import { Component, Inject, Input } from '@angular/core';
import { Media } from 'src/app/models/media';
import { MediaService } from 'src/app/services/medias.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';








@Component({
  selector: 'app-modal-agregar-editar',
  templateUrl: './modal-agregar-editar.component.html',
  styleUrls: ['./modal-agregar-editar.component.css']
})
export class ModalAgregarEditarComponent {
  // Propiedades del formulario
  id: number = 0;
  name: string = '';
  description: string = '';
  precio: number = 0;
  img: string = '';

  constructor(
    public dialogRef: MatDialogRef<ModalAgregarEditarComponent>,
   @Inject(MAT_DIALOG_DATA) public media: Media,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mediaService: MediaService
  ) {
    this.media = data.media;
    console.log('Media recibida:', this.media);
    // Si se proporciona una media, estamos editando, así que cargamos los valores actuales
    if (this.media) {
      // Si se proporciona una media, estamos editando, así que cargamos los valores actuales
      this.id = this.media.id;
      this.name = this.media.name;
      this.description = this.media.description;
      this.precio = this.media.precio;
      this.img = this.media.img;
    }
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }

  guardarMedia(): void {
    const nuevaMedia: Media = {
      id: this.media ? this.media.id : 0, // Si estamos editando, proporciona el ID existente, de lo contrario, usa 0
      name: this.name,
      description: this.description,
      precio: this.precio,
      img: this.img
    };

    if (this.media) {
      // Si estamos editando, actualizamos la media existente
      this.mediaService.updateMedia(nuevaMedia).subscribe(
        () => {
          this.dialogRef.close('Media actualizada correctamente');
        },
        (error) => {
          console.error('Error al actualizar la media:', error);
          // Lógica adicional si es necesario
        }
      );
    } else {
      // Si no estamos editando, agregamos una nueva media
      this.mediaService.addMedia(nuevaMedia).subscribe(
        () => {
          this.dialogRef.close('Media agregada correctamente');
        },
        (error) => {
          console.error('Error al agregar la media:', error);
          // Lógica adicional si es necesario
        }
      );
    }
  }


}
