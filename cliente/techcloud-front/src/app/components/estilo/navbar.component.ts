import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { AuthInterceptorService } from '../../services/auth-interceptor.service';

@Component({
  selector: 'app-estilo',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class EstiloComponent implements OnInit {

  constructor(private loginService: LoginService,private auth: AuthInterceptorService ) {
        
  }
  
  ngOnInit(): void {
  }
  drop(){
  }
  

}
