const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({

    nombre: String,
    apellido: String,
    email:String,
    nombreUsuario: String,
    contrasenya: String,
    fechaNacimiento: Date,
    tipoUsuario: [{
        type: Schema.Types.ObjectId,
        ref :'tipoUsuario'

    }],
    imagen: String,
    canciones: [{
        type: Schema.Types.ObjectId,
        ref :'cancion'

    }]

});


module.exports = mongoose.model('usuario', usuarioSchema);