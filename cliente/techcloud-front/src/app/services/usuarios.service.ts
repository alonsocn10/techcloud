import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarios'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  

  selectedUsuario : Usuarios;
  usuarioss : Usuarios[];
  URL = "http://localhost:3000/usuarios"

  constructor(private http: HttpClient) { }

    getUsuario() {

      return this.http.get(this.URL);
        
    }

    postUsuarios() {

      return this.http.post(this.URL, Usuarios);
        
    };
    putUsuarios() {

      return this.http.put(this.URL, '/${usuarios_id}', usuarios);
        
    };

    deleteUsuarios(_id: string) {

      return this.http.delete(this.URL, '/${_id}');
        
    };

  
  
}
