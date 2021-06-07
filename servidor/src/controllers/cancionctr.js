const cancion = require('../models/cancionmdl'); 
const path = require('path');
const fs = require('fs')

module.exports = {

    index: async (req, res, ) => {
    
       const cancions = await cancion.find({});
       res.status(200).json(cancions);
        
                
    },
    newCancion: async (req, res, ) => {
        console.log(req.body);
        const newcancion = new cancion(req.body);
        newcancion.audio = req.file.path;
        if (!newcancion.Artista) {
            newcancion.Artista = newcancion.usuario;
        }
        newcancion.imagen = 'uploads\\imageSong.jpg';
        const cancions = await newcancion.save();
        res.status(200).json(cancions);

    },
    getCancion: async (req, res, ) => {
        const { cancionId } = req.params;
        const cancions = await cancion.findById(cancionId);
        res.status(200).json(cancions);

    },
    getGenero: async (req, res, ) => {
        const { genero } = req.params;
        const cancions = await cancion.find({Genero : genero});
        res.status(200).json(cancions);

    },
    getUsuarioSong: async (req, res, ) => {
        const { nombreUsuario } = req.params;
        const cancions = await cancion.find({usuario : nombreUsuario});
        res.status(200).json(cancions);

    },
    replaceCancion: async (req, res, ) => {
        console.log(req.body);
        const { cancionId } = req.params;
        const newcancion = req.body;
        if (!newcancion.Artista) {
            newcancion.Artista = newcancion.usuario;
        }
        if (newcancion.audio){
            await fs.unlink(path.resolve(newUsuario.cancion))
            newcancion.audio = req.files.path;
        }
        newcancion.audio = req.file.path;
        
        const oldcancion = await cancion.findByIdAndUpdate(cancionId, newcancion);
        res.status(200).json({success : true});

    },
    updateCancion: async (req, res, ) => {
        const { cancionId } = req.params;
        const newcancion = req.body;
        const oldcancion = await cancion.findByIdAndUpdate(cancionId, newcancion);
        res.status(200).json({success : true});


    },
    deleteCancion: async (req, res, ) => {
        const { cancionId } = req.params;
        await cancion.findByIdAndRemove(cancionId);
        res.status(200).json({success : true});

    },
    getUsuario: async (req, res, ) => {
        const { cancionId } = req.params;
        const cancions = await cancion.findById(cancionId);
        res.status(200).json(cancions);

    },
    
}