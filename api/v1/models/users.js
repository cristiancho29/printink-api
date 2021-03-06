var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var userSchema = new Schema(
{
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
    {
        timestamps:true
    }
);

module.exports = mongoose.model('User',userSchema);