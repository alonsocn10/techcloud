import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Artistas } from 'src/app/models/artistas';
import { Generos } from 'src/app/models/generos';
import { ArtistasService } from 'src/app/services/artistas.service';
import { GenerosService } from 'src/app/services/generos.service';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-artistasplist',
  templateUrl: './artistasplist.component.html',
  styleUrls: ['./artistasplist.component.css'],
  providers: [ArtistasService]
})
export class ArtistasplistComponent implements OnInit {
  imagen: File;
  imgSelected: string | ArrayBuffer;
  
  constructor(public artistasService: ArtistasService, public generoService: GenerosService,) { }
  
  imagenElegida(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.imagen = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.imgSelected = reader.result;
      reader.readAsDataURL(this.imagen);
    }
  }
  ngOnInit(): void {
    this.getArtist();
    this.getGeneros();
  }
  getArtist(){
    this.artistasService.getArtistas()
      .subscribe(res =>{
        this.artistasService.artistas = res as Artistas[];
      }
        )
  }
  getGeneros(){
    this.generoService.getGenero()
        .subscribe(res =>{
          this.generoService.generos = res as Generos[];
        }
          )}
  getArtistaid(_id: string){
    this.artistasService.getArtistaId(_id)
    .subscribe(res =>{
      this.artistasService.artistas = res as Artistas[];
    })
  }
  editArtist(nombre: HTMLInputElement,genero: HTMLInputElement,descripcion: HTMLTextAreaElement, _id: string){
    this.artistasService.putArtistas( _id, nombre.value, genero.value, descripcion.value, this.imagen)
      .subscribe(res =>{
         // this.resetForm(artistaForm)
          this.getArtist();

      }, err =>{
        console.log(err)
      } 
      )
  }
  resetForm(form?: NgForm){
    if(form){
    form.reset;
    this.artistasService.selectedArtista = new Artistas();
    }
}
  deleteArtist(_id: string){
    
      this.artistasService.deleteArtistas(_id)
    .subscribe(res =>{
      this.getArtist()
    })
      
    
    
  }
}