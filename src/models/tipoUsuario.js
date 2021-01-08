const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipoUsuarioSchema = new Schema({

    tipoUsuario: String,
    rango: String
});

module.exports = mongoose.model('tipoUsuario', tipoUsuarioSchema);