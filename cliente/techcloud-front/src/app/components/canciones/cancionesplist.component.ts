import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Artistas } from 'src/app/models/artistas';
import { Canciones } from 'src/app/models/canciones';
import { Generos } from 'src/app/models/generos';
import { ArtistasService } from 'src/app/services/artistas.service';
import { CancionesService } from 'src/app/services/canciones.service';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-cancionesplist',
  templateUrl: './cancionesplist.component.html',
  styleUrls: ['./cancionesplist.component.css']
})
export class CancionesplistComponent implements OnInit {

  constructor(public cancionesService: CancionesService,
              public generosService: GenerosService,
              public artistasService: ArtistasService) { }


  ngOnInit(): void {
    this.getCanciones();
  }
  getCanciones(){
    this.cancionesService.getCanciones()
      .subscribe(res =>{
        this.cancionesService.canciones = res as Canciones[];
        console.log(res)
      }
        )
  }
  editCancion(cancionFomr: NgForm, _id: string){
    this.cancionesService.putCanciones(cancionFomr.value, _id)
      .subscribe( res => {
        this.cancionesService.canciones = res as Canciones[]
        this.getCanciones()
      }, err => {
        console.log(err)
      })
  }
  getCancionId(_id: string){
    this.cancionesService.getCancionId(_id)
      .subscribe(res =>{
        this.cancionesService.canciones = res as Canciones[];
        this.getGenero()
        this.getArtista()
      }
        )
  }
  getGenero(){
    this.generosService.getGenero()
    . subscribe(res =>{
      this.generosService.generos = res as Generos[];
    } 
      )
  }
  getArtista(){
    this.artistasService.getArtistas()
    . subscribe(res =>{
      this.artistasService.artistas = res as Artistas[];
    } 
      )
  }
  deleteCancion(_id: string){
  
      this.cancionesService.deleteCanciones(_id)
    .subscribe(res =>{
      this.getCanciones()
     console.log(res)
    })
    
  }
  resetForm(form?: NgForm){
    if(form){
    form.reset;
    this.generosService.selectedGenero = new Generos();
    }
}
}
