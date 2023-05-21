
const Utente = require("../models/UtenteModel");

exports.crea_Utente = async function(req,res){
    try{
        const utente = await new Utente(req.body).save();
        res.json(utente);
    }catch(err){
        console.log(err.message);
        res.json(err.message)
    }
};

exports.rimuovi_Utente = async function(req,res){
    try{
        await Utente.findByIdAndDelete(req.params.id);
        res.json('Utente successfully deleted');
    }catch(err){
        console.log(err.message);
        res.json(err.message);
    }
};

exports.aggiorna_Utente = async function(req,res){
    try{
        const utente = await Utente.findOneAndUpdate({_id: req.params.id},{$set: req.body});
        res.json(utente);
    }catch(err){
        console.log(err.message);
    }
};

exports.get_Utente = async function(req,res){
    try{
        const utente = await Utente.findById(req.params.id);
        res.json(utente);
    }catch(err){
        console.log(err.message);
        res.json(err.message)
    }
};

exports.get_Utenti = async function(req,res){
    var query = req.query;
    try{
        const utenti = await Utente.find(query);
        res.json(utenti);
    }catch(err){
        console.log(err.message);
        res.json(err.message);
    }
};