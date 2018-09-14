const mongoose = require('mongoose');

const { Schema } =  mongoose;

const ArticuloSchema = new Schema({
    titulo: {type: String, required: true},
    reseña: {type: String, required: true},
    texto: {type: String, required: true},
    autor: {type: String, required: true}
});

module.exports = mongoose.model('Articulo',ArticuloSchema);