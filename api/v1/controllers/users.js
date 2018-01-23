"use strict";

var mongoose = require("mongoose");
var User = require("./../models/users");
var config =require("./../../../config");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

//POST Inicia una sesión de usuario y entrega el token si 
//  la información es correcta
exports.login = function(req,res){
    User.findOne({username:req.body.username},function(err,user){
        if(err) return res.json(err.message);
        if(!user) return res.json({success:false, message:"Usuario no encontrado"});
        else if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){
                const token = jwt.sign(user,config.secret,{expiresIn:'1h'});
                return res.status(200).send({
                    success:true,
                    message:"Inicio sesión exitosa",
                    token:token
                });
            }
            else{
                return res.status(200).send({success:false,message:"Contraseña incorrecta"});
            }
        }
    });
};





