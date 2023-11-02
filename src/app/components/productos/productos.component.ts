import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/rick-and-morty.service'
import { Router } from '@angular/router';
import { MediaService } from 'src/app/services/medias.service';
import { Media } from 'src/app/models/media';






@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  //conecto api de prueba
  medias: Media[] = [];

  constructor(private mediasService: MediaService , private router: Router) {}

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

}







