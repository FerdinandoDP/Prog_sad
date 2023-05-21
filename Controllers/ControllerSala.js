const Sala = require('../models/SalaModel');

exports.crea_Sala = async function(req,res){
    try{
        const sala = await new Sala(req.body).save();
        console.log(sala);
        res.json(sala);
    }catch(err){
        res.json(err.message);

    }
};

exports.rimuovi_Sala = async function(req,res){
    try{
        await Sala.findByIdAndDelete(req.params.id);
        res.json('Sala successfully deleted');
    }catch(err){
        res.json(err.message);
    }
};

exports.aggiorna_Sala = async function(req,res){
    try{
        const sala = await Sala.findOneAndUpdate({_id: req.params.id},{$set: req.body});
        res.json(sala);
    }catch(err){
        res.json({message: err.message});
    }
};

exports.get_Sala = async function(req,res){
    try{
        const sala = await Sala.findById(req.params.id);
        res.json(sala);
    }catch(err){
        res.json({message: err.message});
    }
};

exports.get_Sale = async function(req,res){
    var query = req.query;
    try{
        const sale = await Sala.find(query);
        res.json(sale);
    }catch(err){
        res.json({message: err.message});
    }
};