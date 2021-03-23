const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipoUsuarioSchema = new Schema({

    tipo: Number,
    nombre: String
});

module.exports = mongoose.model('tipoUsuario', tipoUsuarioSchema);