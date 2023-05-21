const mongoose = require("mongoose");

const SalaSchema = new mongoose.Schema({
    id:{
        type: String,
        required:true
    },
    stato:{
        type:Boolean
    },
    costo:{
        type:Number
    },
    capienza:{
        type:Number
    },
    extra:{
        type:String
    }
});

module.exports = mongoose.model('Sala', SalaSchema);