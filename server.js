"use strict";

const  express = require("express");
const cors =require("cors");

const  bodyParser=require("body-parser");
const  mongoose= require("mongoose");

const config = require('./config');
const api = require('./api/v1');

mongoose.connect(config.db.url, { useMongoClient: true });
const  app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api", api);
app.use("/api/v1",api);

app.use((req,res,next)=>{
    console.log("Route not found");
    res.status(404);
    res.json({
       "error":"Error. Route not found" 
    });
});

app.use((err,req,res,next)=>{
    console.log("Error");
    res.status(500);
    res.json({
        "error": `${err}`
    });
});

var server = app.listen(process.env.PORT || 8080, function (){
    var port = server.address().port;
    console.log("App corriendo en puerto", port)
});