import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artistas } from '../models/artistas';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  selectedArtista: Artistas;
  readonly URL = "http://localhost:3000/api/artistas"
  artistas: Artistas[] = [];
  constructor(public http: HttpClient) { 
    this.selectedArtista = new Artistas();
  }

  getArtistas() {

    return this.http.get(this.URL);
      
  }
  getArtistaId(_id: string) {

    return this.http.get(this.URL +'/'+ _id);
      
  }
  postArtistas(artistas: Artistas ) {

    return this.http.post(this.URL, artistas);
      
  };
  putArtistas(artistas: Artistas, _id: string) {

    return this.http.put(this.URL + '/' + _id, artistas);
      
  };

  deleteArtistas(_id: string) {

    return this.http.delete(this.URL +'/'+_id);
      
  };}
