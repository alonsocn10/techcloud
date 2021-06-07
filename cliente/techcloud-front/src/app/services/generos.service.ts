import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Generos } from '../models/generos';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  selectedGenero: Generos;
  readonly URL = "http://localhost:3000/api/generos"
  readonly URL_2 = "http://localhost:3000/api/canciones"

  generos: Generos[] = [];
  constructor(public http: HttpClient) { 
    this.selectedGenero = new Generos();
  }  getGenero() {

    return this.http.get(this.URL);
      
  }

  postGeneros(generos: Generos ) {
    return this.http.post(this.URL, generos);
      
  };
  getGenerosId(_id: string) {

    return this.http.get(this.URL +'/'+ _id);
      
  }
  putGeneros(generos: Generos, _id: string) {

    return this.http.put(this.URL + '/' + _id, generos);
      
  };

  getCanciones(tipo: string){
    return this.http.get(this.URL_2 + '/genero/' + tipo)
  }

  deleteGeneros(_id: string) {

    return this.http.delete(this.URL +'/'+ _id);
      
  };
}
