import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent {

  
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
