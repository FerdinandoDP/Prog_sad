const mongoose = require("mongoose");

const PostazioneSchema = new mongoose.Schema({
    id:{
        type: String,
        required:true
    },
    stato:{
        type:Boolean
    },
    costo:{
        type:Number
    }
});

module.exports = mongoose.model('Postazione', PostazioneSchema);