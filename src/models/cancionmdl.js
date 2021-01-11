const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CancionSchema = new Schema({

    nombre: String,
    Artista: String,
    Usuario: String,
    Genero: String,
    Descripcion: String
});

module.exports = mongoose.model('cancion', CancionSchema);