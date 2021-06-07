import { Component, OnInit } from '@angular/core';
import { Generos } from 'src/app/models/generos';
import { GenerosService } from 'src/app/services/generos.service';
import { GenerosCancionesComponent } from './generos-canciones.component';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  constructor(public generosService:GenerosService) { }

  ngOnInit(): void {
    this.getGeneros()
    
  }
  setTipo(tipo: string){
    localStorage.setItem('genero', tipo)
  }
  getGeneros(){
    this.generosService.getGenero()
      .subscribe(res =>{
        this.generosService.generos = res as Generos[];
      }
        )
  }
  p: number = 1;

}
