const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipoUsuarioSchema = new Schema({

    nombre: String,
    apellido: String
});

module.exports = mongoose.model('tipoUsuario', tipoUsuarioSchema);