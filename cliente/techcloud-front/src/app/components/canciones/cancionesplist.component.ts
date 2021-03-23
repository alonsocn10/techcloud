import { Component, OnInit } from '@angular/core';
import { Canciones } from 'src/app/models/canciones';
import { CancionesService } from 'src/app/services/canciones.service';

@Component({
  selector: 'app-cancionesplist',
  templateUrl: './cancionesplist.component.html',
  styleUrls: ['./cancionesplist.component.css']
})
export class CancionesplistComponent implements OnInit {

  constructor(public cancionesService: CancionesService) { }


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
  editArtist(artistas: Canciones){
    this.cancionesService.selectedCancion = artistas
  }
  getCancionId(_id: string){
    this.cancionesService.getCancionId(_id)
      .subscribe(res =>{
        this.cancionesService.canciones = res as Canciones[];
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
}
