import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from 'src/app/models/media';
import { MediaService } from 'src/app/services/medias.service';



@Component({
  selector: 'app-liquidaciones',
  templateUrl: './liquidaciones.component.html',
  styleUrls: ['./liquidaciones.component.css']
})
export class LiquidacionesComponent implements OnInit  {
  medias: Media[] = [];

  constructor(private mediasService: MediaService , private router: Router) {}

  ngOnInit(): void {
    this.mediasService.getMedias()
      .subscribe(medias => {
        this.medias = medias;
      });
      console.log(this.medias)

     
  }




  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  goToInicio() {
    this.router.navigate(['/inicio']);
  }
  
}
