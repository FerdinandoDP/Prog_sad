const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const Utente = require("./UtenteModel");
const Postazione = require('./PostazioneModel');
const Sala = require('./SalaModel');

const PrenotazioneSchema = new mongoose.Schema({
    id:{
        type: String,
        required:true
    },
    costo:{
        type:Number
    },
    data_inizio:{
        type:Date
    },
    data_fine:{
        type:Date
    },
    data_emissione:{
        type:Date
    },
    tipologia:{
        type:String
    },
    Utente:{
        type:Schema.Types.ObjectId,
        ref: Utente
    },
    Posto:{
        type:Schema.Types.ObjectId,
        ref: Postazione
    },
    Sala:{
        type:Schema.Types.ObjectId,
        ref: Sala
    }
});

module.exports = mongoose.model('Prenotazione', PrenotazioneSchema);