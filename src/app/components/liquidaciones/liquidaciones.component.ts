import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/rick-and-morty.service'


@Component({
  selector: 'app-liquidaciones',
  templateUrl: './liquidaciones.component.html',
  styleUrls: ['./liquidaciones.component.css']
})
export class LiquidacionesComponent implements OnInit  {

  characters: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }


}
