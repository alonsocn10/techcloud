import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Canciones } from '../models/canciones';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  selectedCancion: Canciones;
  readonly URL = "http://localhost:3000/api/canciones"
  canciones: Canciones[] = [];
  constructor(public http: HttpClient) { 
    this.selectedCancion = new Canciones();
  }
  getCanciones() {

    return this.http.get(this.URL);
      
  }
  getCancionId(_id: string) {

    return this.http.get(this.URL +'/'+ _id);
      
  }
  postCanciones(canciones: Canciones ) {

    return this.http.post(this.URL, canciones);
      
  };
  putCanciones(canciones: Canciones) {

    return this.http.put(this.URL + '/${canciones._id}', canciones);
      
  };

  deleteCanciones(_id: string) {

    return this.http.delete(this.URL +'/'+_id);
      
  };
}
