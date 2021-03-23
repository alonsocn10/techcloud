import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders,  } from '@angular/common/http';
import { from } from 'rxjs';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  

  selectedUsuario: Usuarios;
  readonly URL = "http://localhost:3000/api/usuarios"
  usuarios: Usuarios[] = [];
  constructor(public http: HttpClient) { 
    this.selectedUsuario = new Usuarios();
  }

    getUsuario() {

      return this.http.get(this.URL);
        
    }
    getUsuarioId(_id: string) {

      return this.http.get(this.URL +'/'+ _id);
        
    }

    postUsuarios(usuarios: Usuarios ) {
      return this.http.post(this.URL, usuarios);
        
    };
    putUsuarios(usuarios: Usuarios) {

      return this.http.put(this.URL + '/${usuarios._id}', usuarios);
        
    };

    deleteUsuarios(_id: string) {

      return this.http.delete(this.URL +'/'+ _id);
        
    };

  
  
}
