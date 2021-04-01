import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Artistas } from 'src/app/models/artistas';
import { Generos } from 'src/app/models/generos';
import { ArtistasService } from 'src/app/services/artistas.service';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-artistasplist',
  templateUrl: './artistasplist.component.html',
  styleUrls: ['./artistasplist.component.css'],
  providers: [ArtistasService]
})
export class ArtistasplistComponent implements OnInit {

  constructor(public artistasService: ArtistasService, public generoService: GenerosService,) { }

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
  editArtist(artistaForm: NgForm, _id: string){
    this.artistasService.putArtistas(artistaForm.value, _id)
      .subscribe(res =>{
          console.log('Updated Succesfully')
          this.resetForm(artistaForm)
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
     console.log(res)
    })
      
    
    
  }
}