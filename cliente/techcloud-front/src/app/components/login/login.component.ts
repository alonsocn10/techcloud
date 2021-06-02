import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { get } from 'jquery';
import { from } from 'rxjs';
import { Login } from 'src/app/models/login';
import { Singup } from 'src/app/models/singup';
import { LoginService } from 'src/app/services/login.service';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit  {
  imagen: File  ;
  imgSelected: string | ArrayBuffer ;
  constructor(public loginService : LoginService, public router: Router ){ }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMsg = '';
  


  submitted = false;
  ngOnInit(): void {
    this.reg()
  }
  imagenElegida(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.imagen = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.imgSelected = reader.result;
      reader.readAsDataURL(this.imagen);
    }
  }
  getNombreUsuario(){
    this.loginService.check()
      .subscribe(res =>{
      this.loginService.nombreUsuario.nombreUsuario = res.toString();

      }
        )
  }
  nomUs = '';
  logIn(loginForm: NgForm){
    this.submitted = true;
    this.loginService.login(loginForm.value)
      .subscribe( res=>{
        localStorage.setItem('token', res.token)
        localStorage.setItem('tipo', res.tipo)
        localStorage.setItem('_id', res.nombreUsuario)
        this.getNombreUsuario()
        this.resetForm(loginForm)
        this.router.navigate(['/home']);

      },
      err => {
      this.errorMsg = "Se ha producido un error al realizar su petición. Por favor compruebe los datos y pruebe otra vez" }
      )
    
    }
  
    singUp( nombre: HTMLInputElement,apellido: HTMLInputElement,email: HTMLInputElement,fechaNacimiento: HTMLInputElement,nombreUsuario: HTMLInputElement, contrasenya: HTMLInputElement, singUpForm: NgForm){
      this.loginService.singUp(nombre.value, apellido.value, email.value, nombreUsuario.value, contrasenya.value,fechaNacimiento.value, this.imagen)
        .subscribe( res=>{
          this.resetForm(singUpForm);
          this.router.navigate(['/home']);
          this.loginService.login(singUpForm.value.nombreUsuario + singUpForm.value.contrasenya)

        },
        
        err => console.log(err))
      }
      
  resetForm(form?: NgForm){
    if(form){
      form.reset;
      this.loginService.selectedLogin = new Login();
      this.loginService.selectedSingUp = new Singup();

    }
  }
    reg(){  document.querySelector('.img__btn')?.addEventListener('click', function () {
    document.querySelector('.cont')?.classList.toggle('s--signup'); 
  });
}
}
  




