const Usuario = require('../models/usuario'); 

module.exports = {

    index: async (req, res, next) => {
    
       const usuarios = await Usuario.find({});
       res.status(200).json(usuarios);
        
                
    },
    newUsuario: async (req, res, next) => {
        const newUsuario = new Usuario(req.body);
        const usuario = await newUsuario.save();
        res.status(200).json(usuario);

    },
    getUsuario: async (req, res, next) => {
        const { usuarioId } = req.params;
        const usuario = await Usuario.findById(usuarioId);
        res.status(200).json(usuario);

    },
    replaceUsuario: async (req, res, next) => {
        const { usuarioId } = req.params;
        const newUsuario = req.body;
        const oldUsuario = await Usuario.findByIdAndUpdate(usuarioId, newUsuario);
        res.status(200).json({success : true});

    },
    updateUsuario: async (req, res, next) => {
        const { usuarioId } = req.params;
        const newUsuario = req.body;
        const oldUsuario = await Usuario.findByIdAndUpdate(usuarioId, newUsuario);
        res.status(200).json({success : true});

    },
    deleteUsuario: async (req, res, next) => {
        const { usuarioId } = req.params;
        await Usuario.findByIdAndRemove(usuarioId);
        res.status(200).json({success : true});

    },
    getTipoUsuario: async (req, res, next) => {
        const { usuarioId } = req.params;
        const usuario = Usuario.findById(usuarioId);
        res.status(200).json({success : true});

    },
}