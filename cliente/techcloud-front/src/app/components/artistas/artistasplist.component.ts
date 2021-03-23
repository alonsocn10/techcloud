import { Component, OnInit } from '@angular/core';
import { Artistas } from 'src/app/models/artistas';
import { ArtistasService } from 'src/app/services/artistas.service';

@Component({
  selector: 'app-artistasplist',
  templateUrl: './artistasplist.component.html',
  styleUrls: ['./artistasplist.component.css'],
  providers: [ArtistasService]
})
export class ArtistasplistComponent implements OnInit {

  constructor(public artistasService: ArtistasService) { }

  ngOnInit(): void {
    this.getArtist();
  }
  getArtist(){
    this.artistasService.getArtistas()
      .subscribe(res =>{
        this.artistasService.artistas = res as Artistas[];
        console.log(res)
      }
        )
  }
  editArtist(artistas: Artistas){
    this.artistasService.selectedArtista = artistas
  }
  deleteArtist(_id: string){
    if(confirm('Estas seguro de eliminar el artista?')){
      this.artistasService.deleteArtistas(_id)
    .subscribe(res =>{
      this.getArtist()
     console.log(res)
    })
      
    }
    
  }
}
