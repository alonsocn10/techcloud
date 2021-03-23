const mongoose = require('mongoose');
const bcryptjs = require('bcrypt');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({

    nombre:{ 
        type: String,
        require: true
    },
    apellido: { 
        type: String,
        require: true
    },
    email:{ 
        type: String,
        require: true,
        unique: true
    },
    nombreUsuario: { 
        type: String,
        require: true,
        unique: true
    },
    contrasenya: { 
        type: String,
        require: true
    },
    fechaNacimiento: { 
        type: Date,
        require: true
    },
    tipoUsuario: {
        type: Number,
        ref :'tipo',
        require: true,
    },
    imagen: String,
  

});

usuarioSchema.statics.encryptsPasswd = async (contrasenya) => {
        const salt =await bcryptjs.genSalt(10)
        return await bcryptjs.hash(contrasenya, salt)
}
usuarioSchema.statics.compare = async (contrasenya, receivedPasswd) => {
        return await bcryptjs.compare(contrasenya, receivedPasswd)

}


module.exports = mongoose.model('usuario', usuarioSchema);