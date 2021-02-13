const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistaSchema = new Schema({

    nombre: String,
    genero: String,
    descripcion: String,
    imagen: String,
    canciones: [{
        type: Schema.Types.ObjectId,
        ref: 'canciones'
    }]

});

module.exports = mongoose.model('artista', artistaSchema);