const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CancionSchema = new Schema({

    nombre: String,
    Artista: String,
    nomUsuario: [{
        type: Schema.Types.ObjectId,
        ref :'usuario'

    }],
        Genero: String,
    imagen: String,
    Descripcion: String,
    length  :  Number , 
    chunkSize :  Number  , 
    uploadDate: Date  , 
    filename:   String  
    
});

module.exports = mongoose.model('cancion', CancionSchema);