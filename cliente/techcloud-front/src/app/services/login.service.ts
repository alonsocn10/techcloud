import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  selectedLogin: Login;
  readonly URL = "http://localhost:3000/api/auth"
  constructor(private http:HttpClient) { 
    this.selectedLogin = new Login();
  }

    login(inicio : Login) {
      
      return this.http.post(this.URL + '/login' ,inicio );        
    }

    

  }
