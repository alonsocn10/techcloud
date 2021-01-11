const tipoUsuario = require('../models/tipoUsuariomdl'); 

module.exports = {

    index: async (req, res, next) => {
    
       const tipousuarios = await tipoUsuario.find({});
       res.status(200).json(tipousuarios);
        
                
    },
    newtipoUsuario: async (req, res, next) => {
        const newtipoUsuario = new tipoUsuario(req.body);
        const tipousuarios = await newtipoUsuario.save();
        res.status(200).json(tipousuarios);

    },
    gettipoUsuario: async (req, res, next) => {
        const { tipoUsuarioId } = req.params;
        const tipousuarios = await tipoUsuario.findById(tipoUsuarioId);
        res.status(200).json(tipousuarios);

    },
    replacetipoUsuario: async (req, res, next) => {
        const { tipoUsuarioId } = req.params;
        const newtipoUsuario = req.body;
        const oldtipoUsuario = await tipoUsuario.findByIdAndUpdate(tipoUsuarioId, newtipoUsuario);
        res.status(200).json({success : true});

    },
    updatetipoUsuario: async (req, res, next) => {
        const { tipoUsuarioId } = req.params;
        const newtipoUsuario = req.body;
        const oldtipoUsuario = await tipoUsuario.findByIdAndUpdate(tipoUsuarioId, newtipoUsuario);
        res.status(200).json({success : true});


    },
    deletetipoUsuario: async (req, res, next) => {
        const { tipoUsuarioId } = req.params;
        await tipoUsuario.findByIdAndRemove(tipoUsuarioId);
        res.status(200).json({success : true});

    }
    
}