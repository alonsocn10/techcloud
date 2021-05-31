import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-usuariosedit',
  templateUrl: './usuariosedit.component.html',
  styleUrls: ['./usuariosedit.component.css'],
  providers:[UsuariosService]

})
export class UsuarioseditComponent implements OnInit {

  constructor(public usuarioService : UsuariosService, public router: Router ) { }

  ngOnInit(): void {
    //this.editUsuarios();

  }
  usuariosId(_id: string){
    return _id
  }
  /*editUsuarios(){
    this.usuarioService.
      .subscribe(res =>{
        this.usuarioService.usuarios = res as Usuarios[];
      }
        )
  }*/

}
