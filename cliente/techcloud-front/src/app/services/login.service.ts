import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { Singup } from '../models/singup';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  selectedSingUp: Singup;
  selectedLogin: Login;
  readonly URL = "http://localhost:3000/api/auth"
  constructor(public http:HttpClient, public router: Router) { 
    this.selectedLogin = new Login();
    this.selectedSingUp = new Singup();

  }

    login(inicio : Login) {
      
      return this.http.post(this.URL + '/login' ,inicio );        
    }

    loggedIn(){
      return !!localStorage.getItem('token')
    }
    getToken(){
      console.log('hi')
      return localStorage.getItem('token')
    }
    singUp(singUp: Singup ) {

      return this.http.post(this.URL + '/singUp' ,singUp);
        
    };
    logOut(){
      this.router.navigate(['/login'])
      localStorage.removeItem('token')
      console.log('Bye')
    }

  }
