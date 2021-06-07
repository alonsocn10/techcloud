import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers:[UsuariosService]

})
export class NewComponent implements OnInit {
  imagen: File;
  imgSelected: string | ArrayBuffer;
  imagenElegida(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.imagen = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.imgSelected = reader.result;
      reader.readAsDataURL(this.imagen);}}
  constructor(public usuarioService : UsuariosService, public router: Router,  ){ }

  ngOnInit(): void {
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMsg = '';

  newUser(  nombre: HTMLInputElement,apellido: HTMLInputElement,email: HTMLInputElement,fechaNacimiento: HTMLInputElement,nombreUsuario: HTMLInputElement, contrasenya: HTMLInputElement, tipoUsuario: HTMLInputElement,artistForm: NgForm){

    this.usuarioService.postUsuarios(nombre.value, apellido.value, email.value, nombreUsuario.value, contrasenya.value,fechaNacimiento.value, tipoUsuario.value,this.imagen )
    .subscribe( res=>{
    
    this.resetForm(artistForm)
    this.router.navigate(['/usuarios']);
    
    },
    err => console.log(err))
    }
    resetForm(form?: NgForm){
    if(form){
    form.reset;
    this.usuarioService.selectedUsuario = new Usuarios();
    }
}
}
