const mongoose = require("mongoose");

const UtenteSchema = new mongoose.Schema({
    codice_fiscale:{
        type: String,
        required:true
    },
    nome:{
        type:String
    },
    cognome:{
        type:String
    },
    email:{
        type:String
    },
    user_id:{
        type:String
    },
    password:{
        type:String
    },
    indirizzo:{
        type:String
    }
});

module.exports = mongoose.model('Utente', UtenteSchema);