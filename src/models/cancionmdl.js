const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CancionSchema = new Schema({

    nombre: String,
    Artista: {
        type: Schema.Types.ObjectId,
        ref: 'artistas'

    },
    nomUsuario: {
        type: String,
        ref :'nombreUsuario'

    },
    Genero: {
        type: Number,
        ref :'tipo'
    },
    imagen: Object,
    Descripcion: String,
    length  :  Number , 
    chunkSize :  Number  , 
    uploadDate: Date  , 
    filename:   String  
    
});

module.exports = mongoose.model('cancion', CancionSchema);