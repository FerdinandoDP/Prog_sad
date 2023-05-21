const Postazione = require('../models/PostazioneModel');

exports.crea_Postazione = async function(req,res){
    try{
        const postazione = await new Postazione(req.body).save();
        res.json(postazione);
        console.log(postazione)
    }catch(err){
        res.json(err.message);
    }
};

exports.rimuovi_Postazione = async function(req,res){
    try{
        await Postazione.findByIdAndDelete(req.params.id);
        res.json('Postazione successfully deleted');
    }catch(err){
        res.json(err.message);
    }
};

exports.aggiorna_Postazione = async function(req,res){
    try{
        const postazione = await Postazione.findOneAndUpdate({_id: req.params.id},{$set: req.body});
        res.json(postazione);
    }catch(err){
        res.json(err.message);
    }
};

exports.get_Postazione = async function(req,res){
    try{
        const postazione = await Postazione.findById(req.params.id);
        res.json(postazione);
    }catch(err){
        res.json(err.message);
    }
};

exports.get_Postazioni = async function(req,res){
    var query = req.query;
    try{
        const postazioni = await Postazione.find(query);
        res.json(postazioni);
    }catch(err){
        res.json(err.message);
    }
};