import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Artistas } from 'src/app/models/artistas';
import { Canciones } from 'src/app/models/canciones';
import { ArtistasService } from 'src/app/services/artistas.service';
import { CancionesService } from 'src/app/services/canciones.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: [CancionesService]
})
export class NewSongComponent implements OnInit {

  constructor(public cancionesService: CancionesService, public artistasService: ArtistasService,
    public router: Router) { }

ngOnInit(): void {
  this.getArtistas()
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
