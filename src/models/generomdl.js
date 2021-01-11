const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeneroSchema = new Schema({

    tipo: Number,
    nombre: String
});

module.exports = mongoose.model('genero', GeneroSchema);