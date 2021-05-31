const artista = require('../models/artistamdl'); 
const path = require('path');
const fs = require('fs')

module.exports = {

    index: async (req, res, next) => {
    
       const artistas = await artista.find({});
       res.status(200).json(artistas);
        
                
    },
    newArtista: async (req, res, next) => {
        const newartista = new artista(req.body);
        newartista.imagen = req.file.path;
        const artistas = await newartista.save();
        res.status(200).json(artistas);

    },
    getArtista: async (req, res, next) => {
        const { artistaId } = req.params;
        const artistas = await artista.findById(artistaId);
        res.status(200).json(artistas);

    },
    replaceArtista: async (req, res, next) => {
        const { artistaId } = req.params;
        const newartista = req.body;
        if(newartista.imagen){
            newartista.imagen = req.file.path;
            }
        const oldartista = await artista.findByIdAndUpdate(artistaId, newartista);
        res.status(200).json({success : true});

    },
    updateArtista: async (req, res, next) => {
        const { artistaId } = req.params;
        const newartista = req.body;
        if(newartista.imagen){
        newartista.imagen = req.file.path;
        }
        const oldartista = await artista.findByIdAndUpdate(artistaId, newartista);
        res.status(200).json({success : true});


    },
    deleteArtista: async (req, res, next) => {
        const { artistaId } = req.params;
        await artista.findByIdAndRemove(artistaId);
        res.status(200).json({success : true});

    }
    
}