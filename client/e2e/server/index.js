const express = require('express');
const morgan = require('morgan');
const app = express();

 const { mongoose } = require('./database');
//Config
app.set('port', process.env.PORT || 3000);

//Middlwares
app.use(morgan('dev'));
app.use(express.json());
//Rutas
app.use('/api/articulos',require('./routes/articulos.routes.js'));
//inicio del servidor
app.listen(3000, ()=>{
    console.log('Servidor en puerto',app.get('port') );
})