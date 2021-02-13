import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from '../../models/usuarios';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {

  page: number=1
  constructor(public usuariosService: UsuariosService) { }

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