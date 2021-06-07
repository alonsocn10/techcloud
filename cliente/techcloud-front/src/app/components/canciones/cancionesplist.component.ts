import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Artistas } from 'src/app/models/artistas';
import { Canciones } from 'src/app/models/canciones';
import { Generos } from 'src/app/models/generos';
import { ArtistasService } from 'src/app/services/artistas.service';
import { CancionesService } from 'src/app/services/canciones.service';
import { GenerosService } from 'src/app/services/generos.service';
import { LoginService } from 'src/app/services/login.service';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-cancionesplist',
  templateUrl: './cancionesplist.component.html',
  styleUrls: ['./cancionesplist.component.css']
})
export class CancionesplistComponent implements OnInit {
  audio: File;
  constructor(public cancionesService: CancionesService,
              public generosService: GenerosService,
              public artistasService: ArtistasService,
              public authService: LoginService,  ) { }

  imagenElegida(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.audio = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.readAsDataURL(this.audio);
    }
  }
  ngOnInit(): void {
    this.getCanciones();
  }
  getCanciones(){
    this.cancionesService.getCanciones()
      .subscribe(res =>{
        this.cancionesService.canciones = res as Canciones[];
      }
        )
  }
  editCancion(nombre: HTMLInputElement,Genero: HTMLInputElement,Artista: HTMLInputElement, cancionForm: NgForm, _id: string){
    console.log("llega");
    let id = this.authService.get_id()
    this.cancionesService.putCanciones(nombre.value, Genero.value, Artista.value, id, this.audio, _id)
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
    })
    
  }
  resetForm(form?: NgForm){
    if(form){
    form.reset;
    this.generosService.selectedGenero = new Generos();
    }
}
}
