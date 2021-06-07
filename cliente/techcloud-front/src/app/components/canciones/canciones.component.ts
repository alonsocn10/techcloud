import { Component, OnInit } from '@angular/core';
import { Canciones } from 'src/app/models/canciones';
import { CancionesService } from 'src/app/services/canciones.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
  providers: [CancionesService]
})
export class CancionesComponent implements OnInit {

  constructor(public cancionesService: CancionesService) { }


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

}
