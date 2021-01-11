const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({

    nombre: String,
    apellido: String,
    email:String,
    nombreUsuario: String,
    contrasenya: String,
    fechaNacimiento: Date,
    tipoUsuario: Number,
    imagen: String

});


module.exports = mongoose.model('usuario', usuarioSchema);