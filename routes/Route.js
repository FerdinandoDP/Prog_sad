const Prenotazione = require('../Controllers/ControllerPrenotazione');
const Utente = require('../Controllers/ControllerUtente');
const Postazione = require('../Controllers/ControllerPostazione');
const Sala = require('../Controllers/ControllerSala');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

module.exports = function(app){

    app.route('/prenotazioni')
        .get(Prenotazione.get_Prenotazioni)
        .post(Prenotazione.crea_Prenotazione);
    
    app.route('/prenotazioni/:id')
        .get(Prenotazione.get_Prenotazione)
        .patch(Prenotazione.aggiorna_Prenotazione)
        .delete(Prenotazione.rimuovi_Prenotazione);
    
    app.route('/utenti')
        .get(Utente.get_Utenti)
        .post(Utente.crea_Utente);
    
    app.route('/utenti/:id')
        .get(Utente.get_Utente)
        .patch(Utente.aggiorna_Utente)
        .delete(Utente.rimuovi_Utente);
    
    app.route('/postazioni')
        .get(Postazione.get_Postazioni)
        .post(Postazione.crea_Postazione);
    
    app.route('/postazioni/:id')
        .get(Postazione.get_Postazione)
        .patch(Postazione.aggiorna_Postazione)
        .delete(Postazione.rimuovi_Postazione);
    
    app.route('/sale')
        .get(Sala.get_Sale)
        .post(Sala.crea_Sala);
    
    app.route('/sale/:id')
        .get(Sala.get_Sala)
        .patch(Sala.aggiorna_Sala)
        .delete(Sala.rimuovi_Sala);
};


