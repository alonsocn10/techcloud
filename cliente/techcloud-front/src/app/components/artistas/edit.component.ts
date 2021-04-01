import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Artistas } from 'src/app/models/artistas';
import { Generos } from 'src/app/models/generos';
import { ArtistasService } from 'src/app/services/artistas.service';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ArtistasService]

})
export class EditComponent implements OnInit {

  constructor(public artistasService: ArtistasService,
    public router: Router,
    public generosService: GenerosService) { }

ngOnInit(): void {
  this.getGeneros()
}
newArtist(artistForm: NgForm){
this.artistasService.postArtistas(artistForm.value)
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
