var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var productSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    type: {
        type: String,
        required:true
    },
    info:{
        type: String,
        required:true
    },
    img: {
        type: String
    }
});

module.exports = mongoose.model('Products',productSchema);