import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Artistas } from 'src/app/models/artistas';
import { Canciones } from 'src/app/models/canciones';
import { Generos } from 'src/app/models/generos';
import { ArtistasService } from 'src/app/services/artistas.service';
import { CancionesService } from 'src/app/services/canciones.service';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: [CancionesService]
})
export class NewSongComponent implements OnInit {

  constructor(public cancionesService: CancionesService,
    public router: Router,
    public generosService: GenerosService,
    public artistasService: ArtistasService) { }

ngOnInit(): void {
  this.getSelect()
}
getSelect(){
  this.generosService.getGenero()
    .subscribe(res => {
      this.generosService.generos = res as Generos[]
    }, err =>{
      console.log(err)
    })
    this.artistasService.getArtistas()
    .subscribe(res => {
      this.artistasService.artistas = res as Artistas[]
    }, err =>{
      console.log(err)
    }  )
}

newSong(cancionForm: NgForm){
this.cancionesService.postCanciones(cancionForm.value)
.subscribe( res=>{

this.resetForm(cancionForm)
this.router.navigate(['/canciones']);

},
err => console.log(err))
}
resetForm(form?: NgForm){
if(form){
form.reset;
this.cancionesService.selectedCancion = new Canciones();
}
}
getArtistas(){
  this.artistasService.getArtistas()
      .subscribe(res =>{
        this.artistasService.artistas = res as Artistas[];
        console.log(res)
      }
        )

}

}
