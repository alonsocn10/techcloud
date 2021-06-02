import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Artistas } from 'src/app/models/artistas';
import { Generos } from 'src/app/models/generos';
import { ArtistasService } from 'src/app/services/artistas.service';
import { GenerosService } from 'src/app/services/generos.service';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ArtistasService]

})
export class EditComponent implements OnInit {
  imagen: File;
  imgSelected: string | ArrayBuffer;

  constructor(public artistasService: ArtistasService,
    public router: Router,
    public generosService: GenerosService,imagen: File, imgSelected: string | ArrayBuffer ) { 
      this.imagen = imagen
      this.imgSelected = imgSelected }
  
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
  this.getGeneros()
}
newArtist(nombre: HTMLInputElement,genero: HTMLInputElement,descrpcion: HTMLTextAreaElement, artistForm: NgForm){
  console.log(nombre.value, genero.value, descrpcion.value, this.imagen)
this.artistasService.postArtistas(nombre.value, genero.value, descrpcion.value, this.imagen)
.subscribe( res=>{

this.resetForm(artistForm)
this.router.navigate(['/artistas/plist']);

},
err => console.log(err))
}
getGeneros(){
  this.generosService.getGenero()
    .subscribe( res =>{
      this.generosService.generos = res as Generos[]
    })
}
resetForm(form?: NgForm){
if(form){
form.reset;
this.artistasService.selectedArtista = new Artistas();
}
}
}
