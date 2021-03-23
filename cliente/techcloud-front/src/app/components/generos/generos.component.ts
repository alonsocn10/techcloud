import { Component, OnInit } from '@angular/core';
import { Generos } from 'src/app/models/generos';
import { GenerosService } from 'src/app/services/generos.service';

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
  getGeneros(){
    this.generosService.getGenero()
      .subscribe(res =>{
        this.generosService.generos = res as Generos[];
        console.log(res)
      }
        )
  }
  p: number = 1;

}
