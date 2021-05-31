const Usuario = require('../models/usuariomdl'); 
const usuariomdl = require('../models/usuariomdl'); 
const path = require('path');
const fs = require('fs')

const Cancion = require('../models/cancionmdl'); 
const tipoUsuariomdl = require('../models/tipoUsuariomdl');

module.exports = {

    index: async (req, res, next) => {
    
       const usuarios = await Usuario.find({});
       res.status(200).json(usuarios);
        
                
    },
    newUsuario: async (req, res, next) => {
        const newUsuario = req.body;
        console.log(req.body);
        const contra = await usuariomdl.encryptsPasswd(req.body.contrasenya);
        newUsuario.contrasenya = contra;
        newUsuario.imagen = req.file.path;
        const usuario = new Usuario(newUsuario);
         await usuario.save();
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
        if(newUsuario.contrasenya){
        const contra = await usuariomdl.encryptsPasswd(req.body.contrasenya);
        newUsuario.contrasenya = contra;}
        if (newUsuario.imagen){
            newUsuario.imagen = req.file.path;
            await fs.unlink(path.resolve(newUsuario.imagen))
        }
       
        const oldUsuario = await Usuario.findByIdAndUpdate(usuarioId, newUsuario);
        res.status(200).json({success : true});

    },
    updateUsuario: async (req, res, next) => {
        const { usuarioId } = req.params;
        const newUsuario = req.body;
        console.log(req.body);
        const oldUsuario = await Usuario.findByIdAndUpdate(usuarioId, newUsuario);
        res.status(200).json({success : true});

    },
    deleteUsuario: async (req, res, next) => {
        const { usuarioId } = req.params;
        usuario = await Usuario.findByIdAndRemove(usuarioId);
        if (usuario){
            fs.unlink(path.resolve(usuario.imagen))
        }
        res.status(200).json({success : true});

    },
    newSong: async (req, res, next) => {
        const { usuarioId } = req.params;
        const newSong = new Cancion(req.body);
        const usuario = await Usuario.findById(usuarioId);
        newSong.nomUsuario = usuario;
        await newSong.save();
        res.status(201).json(newSong);


    },
}