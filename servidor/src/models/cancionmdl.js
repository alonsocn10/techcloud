const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CancionSchema = new Schema({

    nombre: String,
    Artista: {
        type: String,
        ref: 'artistas'

    },
    usuario: String,
    Genero: {
        type: Number,
        ref :'tipo'
    },
    imagen: String,
    Descripcion: String,
    audio  :  String , 
     
    
});

module.exports = mongoose.model('cancion', CancionSchema);