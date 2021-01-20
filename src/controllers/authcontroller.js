const { jwt } = require('jsonwebtoken');
const usuariomdl = require ('../models/usuariomdl');
const tipoUsuario = require ('../models/tipoUsuariomdl');
const { token } = require('morgan');



module.exports = {
    
 singUp:  async (req, res,) => {
    const newUsuario = new usuariomdl(req.body);
    const tipoUs = await tipoUsuario.findOne({tipo: 2})
    newUsuario.tipoUsuario = tipoUs.tipo
    const contra = await usuariomdl.encryptsPasswd(req.body.contrasenya)
    newUsuario.contrasenya = contra
    if(!newUsuario.imagen){
    newUsuario.imagen = 'usuario.jpg'
    }

    const usuario = await newUsuario.save();
   // const token = jwt.sign({id: usuario._id}, { expiresIn: 86400})
    res.status(200).json({usuario});

    
},
 login: async(req, res) => {

    const userFound = await usuariomdl.findOne({nombreUsuario: req.body.nombreUsuario}).populate("tipo")
    if (!userFound) return res.status(400).json({message: "Nombre de usuario incorrecto"})
   
    const comparacion = await usuariomdl.compare( req.body.contrasenya, userFound.contrasenya)
    if (!comparacion) return res.status(400).json({ message: 'Contraseña incorrecta'})

    console.log(userFound)
    
    res.json({token: ""})

}
}