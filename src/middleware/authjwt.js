const  jwt = require ('jsonwebtoken');
const config = require('../../config');
const tipoUsuariomdl = require('../models/tipoUsuariomdl');
const usuariomdl = require('../models/usuariomdl');


module.exports={
    verifyToken: async (req,res,next) => {
try {
    

        const token = req.headers["authorization"]
        console.log(token)
        if(!token) return res.status(403).json({message: "Token no proporcionado"})
        

        const decoded = jwt.verify(token, 'config.SECRET')
        req.usuarioid = decoded.id  
        const usuario = await usuariomdl.findById(req.usuarioid, {contrasenya: 0})

        if(!usuario) return res.status(403).json({message: "El usuario no existe"})
        next()
    } catch (error) {
        return res.status(401).json({message: "Unautorizado"})
    }
    },
    verifyAdmin: async (req,res,next) => {
        const token = req.headers["authorization"]
        const decoded = jwt.verify(token, 'config.SECRET')

        req.usuarioid = decoded.id  

        const usuario = await usuariomdl.findById(req.usuarioid)
        const tipoUs = await tipoUsuariomdl.find({tipo: {$in: usuario.tipoUsuario }})
        
            if(tipoUs[0].nombre == 'admin'){
                next()
                return
            }
            return res.status(403).json({message: "Requiere ser admin"})
            
    },
    verifyUser: async (req,res,next) => {


    }
}