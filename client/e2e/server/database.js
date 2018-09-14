const mongoose = require('mongoose');

const URI = 'mongodb://localhost/articulos';
mongoose.connect(URI || process.env.MONGODB)
    .then(db => console.log('Conectado a la base'))
    .catch(err => console.error(err));

module.exports = mongoose;