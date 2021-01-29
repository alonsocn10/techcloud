export class Artistas {
    constructor(_id= '', nombre= '', genero='', descripcion='', imagen='' ){
        this._id= _id ;
        this.nombre= nombre ;
        this.genero= genero ;
        this.descripcion=descripcion  ;
        this.imagen= imagen ;
    
        }
        
        
        _id: string ;
        nombre: String ;
        genero: String ;
        imagen:String  ;
        descripcion: String  ;
       
}
