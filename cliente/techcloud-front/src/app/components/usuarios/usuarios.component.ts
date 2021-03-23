import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  getUsuariosId(_id: string){
    this.usuariosService.getUsuarioId(_id)
      .subscribe(res =>{
        this.usuariosService.usuarios = res as Usuarios[];
      }
        )
  }
  editUsuario(usuarioForm: NgForm){
    this.usuariosService.putUsuarios(usuarioForm.value)
    .subscribe( res=>{
    
      this.resetForm(usuarioForm)
      this.getUsuarios();

      
      },
      err => console.log(err))
    
  }
  deleteUser(_id: string){
    if(confirm('Estas seguro de eliminar el usuario?')){
      this.usuariosService.deleteUsuarios(_id)
    .subscribe(res =>{
      this.getUsuarios()
     console.log(res)
    })
      
    }
    
  }
  resetForm(form?: NgForm){
    if(form){
    form.reset;
    this.usuariosService.selectedUsuario = new Usuarios();
    }
}
 
}