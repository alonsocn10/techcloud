const cancion = require('../models/cancionmdl'); 

module.exports = {

    index: async (req, res, next) => {
    
       const cancions = await cancion.find({});
       res.status(200).json(cancions);
        
                
    },
    newCancion: async (req, res, next) => {
        const newcancion = new cancion(req.body);
        const cancions = await newcancion.save();
        res.status(200).json(cancions);

    },
    getCancion: async (req, res, next) => {
        const { cancionId } = req.params;
        const cancions = await cancion.findById(cancionId);
        res.status(200).json(cancions);

    },
    replaceCancion: async (req, res, next) => {
        const { cancionId } = req.params;
        const newcancion = req.body;
        const oldcancion = await cancion.findByIdAndUpdate(cancionId, newcancion);
        res.status(200).json({success : true});

    },
    updateCancion: async (req, res, next) => {
        const { cancionId } = req.params;
        const newcancion = req.body;
        const oldcancion = await cancion.findByIdAndUpdate(cancionId, newcancion);
        res.status(200).json({success : true});


    },
    deleteCancion: async (req, res, next) => {
        const { cancionId } = req.params;
        await cancion.findByIdAndRemove(cancionId);
        res.status(200).json({success : true});

    }
    
}