import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUser } from '../models/loggedUser';
import { Login } from '../models/login';
import { Singup } from '../models/singup';
import { Usuarios } from '../models/usuarios';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  selectedSingUp: Singup;
  selectedLogin: Login;
  loggedUser: LoggedUser[] = [];
  nombreUsuario : Login;


  readonly URL = "http://localhost:3000/api/auth"
  constructor(public http:HttpClient, public router: Router, ) { 
    this.selectedLogin = new Login();
    this.selectedSingUp = new Singup();
    this.nombreUsuario = new Login();
  }

    login(inicio : Login) {
      
      return this.http.post(this.URL + '/login' ,inicio );        
    }

    loggedIn(){
      return !!localStorage.getItem('token')
    }
    getToken(){
      return localStorage.getItem('token')
    }
    singUp( nombre: string , apellido: string , email:string  , nombreUsuario: string , contrasenya: string  , fechaNacimiento: string,
      imagen: File ) {
        const fd = new FormData();
        fd.append('nombre', nombre);
        fd.append('apellido', apellido);
        fd.append('email', email);
        fd.append('nombreUsuario', nombreUsuario);
        fd.append('contrasenya', contrasenya);
        fd.append('fechaNacimiento', fechaNacimiento);
        fd.append('imagen', imagen);


      return this.http.post(this.URL + '/singUp' ,fd);
        
    };
    check() {

      return this.http.get(this.URL + '/check');
        
    };
    esAdmin(){
      return localStorage.getItem('tipo')
    }
    get_id(){
      console.log(localStorage.getItem('_id'))
      return localStorage.getItem('_id')
    }
    logOut(){
      this.router.navigate(['/login'])
      localStorage.removeItem('token')
      localStorage.removeItem('tipo')
      localStorage.removeItem('_id')
      console.log('Bye')
    }

  }
