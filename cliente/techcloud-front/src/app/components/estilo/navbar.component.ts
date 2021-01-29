import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-estilo',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class EstiloComponent implements OnInit {

  constructor(private loginService: LoginService) {
        
  }

  ngOnInit(): void {
  }

}
