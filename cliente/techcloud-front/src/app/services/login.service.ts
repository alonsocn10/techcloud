import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  selectedLogin: Login;
  readonly URL = "http://localhost:3000/api/auth"
  constructor(public http:HttpClient, public router: Router) { 
    this.selectedLogin = new Login();
  }

    login(inicio : Login) {
      
      return this.http.post(this.URL + '/login' ,inicio );        
    }

    loggedIn(){
      return !!localStorage.getItem('token')
    }
    logOut(){
      this.router.navigate(['/home'])
      localStorage.removeItem('token')
      console.log('Bye')
    }

  }
