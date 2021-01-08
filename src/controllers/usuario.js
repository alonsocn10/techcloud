const Usuario = require('../models/usuario'); 

module.exports = {

    index: async (req, res, next) => {
        try{
       const usuarios = await Usuario.find({});
       res.status(200).json(usuarios);
        }catch(err){
            console.log(err);
        }
                
    },
    newUser: function (){

    }
}