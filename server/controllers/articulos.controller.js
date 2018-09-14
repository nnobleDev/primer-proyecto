const Articulo = require('../models/articulos');
const articuloCtrl= {};


//DEFINIMOS LOS METODOS 
articuloCtrl.getArticulos = async (req,res)=>{
    const articulos = await Articulo.find();
    res.json(articulos);
};
articuloCtrl.getArticulo= async(req, res)=>{
    console.log(req.params);
    const articulo = await Articulo.findById(req.params.id);
    res.json(articulo);
};

articuloCtrl.addArticulo = async (req, res)=>{
    //await console.log(req.body);
    const articulo = new Articulo(req.body);
    await console.log(articulo);
    await articulo.save();
    res.json({
        status:"Añadido con exito"
    });
};
articuloCtrl.editArticulo = async (req, res)=>{
    const { id } =req.params;
    const articulo= {
        titulo: req.body.titulo,
        reseña: req.body.reseña,
        texto: req.body.texto,
        autor: req.body.autor
    }
    await Articulo.findByIdAndUpdate(id,{$set:articulo}, {new: true});
    res.json({
        status: 'Actualizado con exito'
    });
};

articuloCtrl.deleteArticulo = async (req, res)=>{
    await Articulo.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Eliminado con exito'
    });
};

module.exports =articuloCtrl;