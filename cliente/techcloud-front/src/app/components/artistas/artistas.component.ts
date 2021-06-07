import { Component, OnInit } from '@angular/core';
import { Artistas } from 'src/app/models/artistas';
import { ArtistasService } from 'src/app/services/artistas.service';



@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css'],
  providers: [ArtistasService]

})
export class ArtistasComponent implements OnInit {

  constructor(public artistasService: ArtistasService) { }

  ngOnInit(): void {
    this.getArtistas();
  }
  getArtistas(){
    this.artistasService.getArtistas()
      .subscribe(res =>{
        this.artistasService.artistas = res as Artistas[];
      }
        )
  }
  p: number = 1;

} 
