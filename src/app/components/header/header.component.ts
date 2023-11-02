import { Component, HostListener, OnInit } from '@angular/core';
import { Media } from 'src/app/models/media';
import { MediaService } from 'src/app/services/medias.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {
  /*conecto api */
  medias: Media[] = [];

  constructor(private mediasService: MediaService) { } 

  ngOnInit(): void {
    this.mediasService.getMedias()
      .subscribe(medias => {
        this.medias = medias;
      });
      console.log(this.medias)

     
  }
    

    
  /** funcion estrellias */
  stars: { x: number, y: number }[] = [];
 @HostListener('document:mousemove', ['$event'])
  addStar(event: MouseEvent) {
    const inicio = document.getElementById('inicioo');
    if (inicio) {
      this.stars.push({ x: event.clientX, y: event.clientY });

      setTimeout(() => {
        this.stars = this.stars.filter(star => star !== this.stars[0]);
      }, 800);
    }
  }

  
}
