import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from '../../models/usuarios'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.view.html',
  styleUrls: ['./usuarios.view.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {


  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios(){
    this.usuariosService.getUsuario()
      .subscribe(res =>{
        this.usuariosService.usuarios = res as Usuarios[];
        console.log(res)
      }
        )
  }

}
