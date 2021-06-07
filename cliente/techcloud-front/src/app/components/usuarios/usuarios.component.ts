import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from '../../models/usuarios';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {
  imagen: File;
  imgSelected: string | ArrayBuffer;
  page: number=1
  constructor(public usuariosService: UsuariosService) { }
  imagenElegida(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.imagen = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.imgSelected = reader.result;
      reader.readAsDataURL(this.imagen);
    }
  }
  ngOnInit(): void {
    this.getUsuarios();

  }
  getUsuarios(){
    this.usuariosService.getUsuario()
      .subscribe(res =>{
        this.usuariosService.usuarios = res as Usuarios[];
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
  editUsuario(  nombre: HTMLInputElement,apellido: HTMLInputElement,email: HTMLInputElement,fechaNacimiento: HTMLInputElement,nombreUsuario: HTMLInputElement, contrasenya: HTMLInputElement,usuarioForm: NgForm, _id: string){
    this.usuariosService.putUsuarios(_id, nombre.value, apellido.value, email.value, nombreUsuario.value, contrasenya.value,fechaNacimiento.value, this.imagen)
    .subscribe( res=>{
    
      this.resetForm(usuarioForm)
      this.getUsuarios();

      
      },
      err => console.log(err))
    
  }
  deleteUser(_id: string){
      this.usuariosService.deleteUsuarios(_id)
    .subscribe(res =>{
      this.getUsuarios()
    },
    err => console.log(err)
    )
      
    
    
  }
  resetForm(form?: NgForm){
    if(form){
    form.reset;
    this.usuariosService.selectedUsuario = new Usuarios();
    }
}
 
}