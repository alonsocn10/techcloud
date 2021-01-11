import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarios';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  selectedUsuario: Usuarios;
  readonly URL = "http://localhost:3000/usuarios"

  constructor(private http: HttpClient) { 

    getUsuarios() {

      return this.http.get(this.URL);
        
    }

    postUsuarios() {

      return this.http.post(this.URL, Usuarios);
        
    };
  }
}
