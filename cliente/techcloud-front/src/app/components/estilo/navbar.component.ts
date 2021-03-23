import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { AuthInterceptorService } from '../../services/auth-interceptor.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-estilo',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class EstiloComponent implements OnInit {

  constructor(private loginService: LoginService,) {

        
  }
  
  ngOnInit(): void {
  }
  
  
  

}
