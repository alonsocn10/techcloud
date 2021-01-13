const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistaSchema = new Schema({

    nombre: String,
    genero: String,
    descripcion: String,
    imagen: String,
    canciones: Number

});

module.exports = mongoose.model('artista', artistaSchema);