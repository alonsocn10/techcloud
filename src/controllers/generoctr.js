const genero = require('../models/generomdl'); 

module.exports = {

    index: async (req, res, next) => {
    
       const generos = await genero.find({});
       res.status(200).json(generos);
        
                
    },
    newGenero: async (req, res, next) => {
        const newgenero = new genero(req.body);
        const generos = await newgenero.save();
        res.status(200).json(generos);

    },
    getGenero: async (req, res, next) => {
        const { generoId } = req.params;
        const generos = await genero.findById(generoId);
        res.status(200).json(generos);

    },
    replaceGenero: async (req, res, next) => {
        const { generoId } = req.params;
        const newgenero = req.body;
        const oldgenero = await genero.findByIdAndUpdate(generoId, newgenero);
        res.status(200).json({success : true});

    },
    updateGenero: async (req, res, next) => {
        const { generoId } = req.params;
        const newgenero = req.body;
        const oldgenero = await genero.findByIdAndUpdate(generoId, newgenero);
        res.status(200).json({success : true});


    },
    deleteGenero: async (req, res, next) => {
        const { generoId } = req.params;
        await genero.findByIdAndRemove(generoId);
        res.status(200).json({success : true});

    }
    
}