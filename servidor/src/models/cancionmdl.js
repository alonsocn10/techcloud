const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CancionSchema = new Schema({

    nombre: String,
    Artista: {
        type: String,
        ref: 'artistas'

    },
    nomUsuario: {
        type: Schema.Types.ObjectId,
        ref :'_id'

    },
    Genero: {
        type: Number,
        ref :'tipo'
    },
    imagen: String,
    Descripcion: String,
    cancion  :  String , 
     
    
});

module.exports = mongoose.model('cancion', CancionSchema);