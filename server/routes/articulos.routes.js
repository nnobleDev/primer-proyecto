const express = require('express');
const router =express.Router();
const articuloCtrl= require('../controllers/articulos.controller');

//DEFINIMOS LAS RUTAS DE ACCESO A NUESTROS METODOS
router.get('/', articuloCtrl.getArticulos);
router.post('/',articuloCtrl.addArticulo);
router.get('/:id', articuloCtrl.getArticulo);
router.put('/:id',articuloCtrl.editArticulo);
router.delete('/:id', articuloCtrl.deleteArticulo);

module.exports = router;