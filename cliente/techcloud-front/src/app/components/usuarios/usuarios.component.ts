import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Usuarios } from '../../models/usuarios'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
