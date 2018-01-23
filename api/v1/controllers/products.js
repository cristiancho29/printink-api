"use strict";

const Product = require("./../models/products");
const jwt = require("jsonwebtoken");
const config = require("./../../../config");

//POST verifica el token
exports.validateToken = function(req,res,next){
    const token = req.body.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token,config.secret,function(err,decoded){
            if(err) return res.status(500).send({message:"Autenticación fallida,token expiro"});
            next();
        });
    }
    else{
        return res.status(403).send({
            message:"Token no suministrado"
        });
    }
};
//GET Regresa todos los productos
exports.findAllProduct = function(req,res){
    Product.find(function(err,products){
        if(err) return res.send(500,err.message);
        console.log("GET /products");
        res.status(200).jsonp(products);
    });
};

//GET Regresa un producto con el id en la ruta
exports.findById = function(req,res){
    Product.findById(req.params.id,function(err,product){
        if(err) return res.status(500).send(err.message);
        console.log("GET /products/"+req.params.id);
        res.status(200).jsonp(product);
    });
};

//POST Agrega un nuevo producto
exports.addProduct = function(req,res){
    console.log("POST");
    console.log(req.body);
    
    const product = new Product(req.body);
    /*
    Aqui se debe añadir una busqueda para validar
    que un producto no existe. Si este no existe 
    se crea el nuevo producto, sino no se deja crear
    el producto.
    */
    product.save(function(err,product){
        if(err) return res.status(500).send(err.message);
        res.status(200).jsonp(product);
    });
};

//PUT Actualiza la información de un producto
exports.updateProduct = function(req,res){
    Product.findById(req.params.id,function(err,product){
        if(err) return res.status(500).send(err.message);
        product=req.body;
        product.save(function(err){
            if(err) return res.status(500).send(err.message);
        });
    });
};

//DELETE Eliminar un producto
exports.deleteProduct = function(req,res){
    Product.findById(req.params.id,function(err, product) {
        if(err) return res.status(500).send(err.message);
        product.remove(function(err){
            if(err) return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
};





