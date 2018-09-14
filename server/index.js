const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./database');
//Config
app.set('port', process.env.PORT || 3000);

//Middlwares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/user', require('./routes/usuarios.routes'));
app.use(cors({origin: 'http://localhost:4200'}));
//Rutas
app.use('/api/articulos',require('./routes/articulos.routes.js'));

app.get('/checking',(req,res)=>{
    res.json({
        status: "Funciona el checking"
    });
});
//inicio del servidor
app.listen(3000, ()=>{
    console.log('Servidor en puerto',app.get('port') );
})