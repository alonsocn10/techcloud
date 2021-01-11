const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({

    nombre: String,
    apellido: String,
    nombreUsuario: String,
    email:String,
    edad:Number,
    tipoUsuario: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tipoUsuario'
    }]

});


module.exports = mongoose.model('usuario', usuarioSchema);