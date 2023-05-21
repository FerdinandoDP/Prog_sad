const Prenotazione = require('../models/PrenotazioneModel');

exports.crea_Prenotazione = async function(req,res){
    try{
        //console.log(req.body);
        if(req.body.data_inizio == null){
            var date_i = new Date();
        }else{
            var date_i = new Date(req.body.data_inizio);
        }
        if(req.body.data_emissione == null){
            var date_e = new Date();
        }else{
            var date_e = new Date(req.body.data_emissione);
        }
        if(req.body.data_fine == null){
            var date_f = new Date();
        }else{
            var date_f = new Date(req.body.data_fine);
        }
        
        const prenotazione = await new Prenotazione({
            id: req.body.id,
            costo: req.body.costo,
            data_inizio: date_i,
            data_fine: date_f,
            data_emissione: date_e,
            tipologia: req.body.tipologia,
            Utente: req.body.Utente,
            Posto: req.body.Posto,
            Sala: req.body.Sala
        }).save();
        res.json(prenotazione);
    }catch(err){
        res.json(err.message);
        console.log(err.message);
    }
};

exports.rimuovi_Prenotazione = async function(req,res){
    try{
        await Prenotazione.findByIdAndDelete(req.params.id);
        res.json('Prenotazione successfully deleted');
    }catch(err){
        res.json(err.message);
        console.log(err.message);
    }
};

exports.aggiorna_Prenotazione = async function(req,res){
    try{
        const prenotazione = await Prenotazione.findOneAndUpdate({_id: req.params.id},{$set: req.body});
        res.json(prenotazione);
    }catch(err){
        console.log(err.message);
    }
};

exports.get_Prenotazione = async function(req,res){
    try{
        const prenotazione = await Prenotazione.findById(req.params.id);
        res.json(prenotazione);
    }catch(err){
        console.log(err.message);
    }
};

exports.get_Prenotazioni = async function(req,res){
    var query = req.query;
    try{
        const prenotazioni = await Prenotazione.find(query);
        res.json(prenotazioni);
    }catch(err){
        console.log(err.message);
    }
};