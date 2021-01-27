const  jwt = require ('jsonwebtoken');
const usuariomdl = require  ('../models/usuariomdl');
const tipoUsuario = require  ('../models/tipoUsuariomdl');
const config = require('../../config');


module.exports = {
 singUp: async (req, res) =>{
    const newUsuario = new usuariomdl(req.body);
    const tipoUs = await tipoUsuario.findOne({ tipo: 2 });
    newUsuario.tipoUsuario = tipoUs.tipo;
    const contra = await usuariomdl.encryptsPasswd(req.body.contrasenya);
    newUsuario.contrasenya = contra;
    if (!newUsuario.imagen) {
        newUsuario.imagen = 'usuario.jpg';
    }
    const usuario = await newUsuario.save();
    const token = jwt.sign({id: usuario._id },'config.SECRET', {expiresIn : 86400})

    res.status(200).json({ token });


},
 login: async (req, res) => {

    const userFound = await usuariomdl.findOne({ nombreUsuario: req.body.nombreUsuario }).populate("tipo");
    if (!userFound)
        return res.status(400).json({ message: "Nombre de usuario incorrecto" });

    const comparacion = await usuariomdl.compare(req.body.contrasenya, userFound.contrasenya);
    if (!comparacion)
        return res.status(400).json({ token: null, message: 'Contraseña incorrecta' });
        const token=jwt.sign({id: userFound._id },'config.SECRET', {expiresIn : 86400})   
         res.json({ token });

}
}