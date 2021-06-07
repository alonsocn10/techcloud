export class LoggedUser {
   
    constructor(_id= '', nombre= '', apellido='', email='', nombreUsuario='', contrasenya='',fechaNacimiento='2001-02-03T23:00:00.000Z', tipoUsuario = 0 , imagen = ''){
        this._id= _id ;
        this.nombre= nombre ;
        this.apellido= apellido ;
        this.email=email  ;
        this.nombreUsuario= nombreUsuario ;
        this.contrasenya= contrasenya  ;
        this.fechaNacimiento= fechaNacimiento;
        this.tipoUsuario= tipoUsuario;
        this.imagen = imagen;
    
        }
        
        
        _id: string ;
        nombre: String ;
        apellido: String ;
        email:String  ;
        nombreUsuario: String ;
        contrasenya: String  ;
        fechaNacimiento: String;
        tipoUsuario: Number;
        imagen: String;
        
}
