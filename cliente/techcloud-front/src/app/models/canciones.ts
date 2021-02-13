export class Canciones {
    constructor(_id= '', nombre= '', Genero='', Artista='', imagen='' ){
        this._id= _id ;
        this.nombre= nombre ;
        this.Genero= Genero ;
        this.Artista=Artista  ;
        this.imagen= imagen ;
    
        }
        
        
        _id: string ;
        nombre: String ;
        Genero: String ;
        imagen:String  ;
        Artista: String  ;
}
