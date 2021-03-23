import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { Singup } from '../models/singup';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  selectedSingUp: Singup;
  selectedLogin: Login;
  usuarios: Login[] = [];
  nombreUsuario : Login;


  readonly URL = "http://localhost:3000/api/auth"
  constructor(public http:HttpClient, public router: Router, ) { 
    this.selectedLogin = new Login();
    this.selectedSingUp = new Singup();
    this.nombreUsuario = new Login()
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
    singUp(singUp: Singup ) {

      return this.http.post(this.URL + '/singUp' ,singUp);
        
    };
    check() {

      return this.http.get(this.URL + '/check');
        
    };
    esAdmin(){
      return localStorage.getItem('tipo')
    }
    logOut(){
      this.router.navigate(['/login'])
      localStorage.removeItem('token')
      localStorage.removeItem('tipo')
      console.log('Bye')
    }

  }
