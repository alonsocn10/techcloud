import { Component, OnInit } from '@angular/core';
import { Generos } from 'src/app/models/generos';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-generosplist',
  templateUrl: './generosplist.component.html',
  styleUrls: ['./generosplist.component.css']
})
export class GenerosplistComponent implements OnInit {

  constructor(public generosService: GenerosService) { }

  ngOnInit(): void {
    this.getGeneros();
  }
  getGeneros(){
    this.generosService.getGenero()
      .subscribe(res =>{
        this.generosService.generos = res as Generos[];
        console.log(res)
      }
        )
  }
  getGenerosId(_id: string){
    this.generosService.getGenerosId(_id)
      .subscribe(res =>{
        this.generosService.generos = res as Generos[];
      }
        )
  }
  editGenero(artistas: Generos){
    this.generosService.selectedGenero = artistas
  }
  deleteGenero(_id: string){
    if(confirm('Estas seguro de eliminar el genero?')){
      this.generosService.deleteGeneros(_id)
    .subscribe(res =>{
      this.getGeneros()
     console.log(res)
    })
      
    }
}
}
