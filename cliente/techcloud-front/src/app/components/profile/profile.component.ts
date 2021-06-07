import { Component, OnInit } from '@angular/core';
import { Canciones } from 'src/app/models/canciones';
import { Usuarios } from 'src/app/models/usuarios';
import { CancionesService } from 'src/app/services/canciones.service';
import { LoginService } from 'src/app/services/login.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(public loginService: LoginService, public usuariosService : UsuariosService, public cancionesService : CancionesService) {
   }

  ngOnInit(): void {
    this.getUserLogged()
    this.getUserSongs()
  }
  getUserLogged(){
    this.loginService.check().subscribe(
      res =>{
        this.usuariosService.usuarios = res as Usuarios[];
      }
        )
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
        this.getUserSongs()
      })
      
    }
  getUserSongs(){
    const nomUs = this.loginService.get_id()
    this.usuariosService.getCanciones(nomUs)
    .subscribe(res => {
      this.cancionesService.canciones = res as Canciones[];

    }

    )
  }
}
