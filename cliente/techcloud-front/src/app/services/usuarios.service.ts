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

    postUsuarios(nombre: string , apellido: string , email:string  , nombreUsuario: string , contrasenya: string  , fechaNacimiento: string,
      imagen: File) {
        const fd = new FormData();
        fd.append('nombre', nombre);
        fd.append('apellido', apellido);
        fd.append('email', email);
        fd.append('nombreUsuario', nombreUsuario);
        fd.append('contrasenya', contrasenya);
        fd.append('fechaNacimiento', fechaNacimiento);
        fd.append('imagen', imagen);

      return this.http.post(this.URL, fd);
        
    };
    putUsuarios( _id: string,nombre: string , apellido: string , email:string  , nombreUsuario: string , contrasenya: string  , fechaNacimiento: string,
      imagen: File) {
        const fd = new FormData();
        fd.append('nombre', nombre);
        fd.append('apellido', apellido);
        fd.append('email', email);
        fd.append('nombreUsuario', nombreUsuario);
        fd.append('contrasenya', contrasenya);
        fd.append('fechaNacimiento', fechaNacimiento);
        fd.append('imagen', imagen);
      return this.http.put(this.URL + '/' + _id, fd);
        
    };

    deleteUsuarios(_id: string) {

      return this.http.delete(this.URL +'/'+ _id);
        
    };

  
  
}
