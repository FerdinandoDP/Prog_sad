require("dotenv").config();
const Mockgoose = require("mockgoose").Mockgoose;
const express = require("express");
const request = require('supertest');
const mongoose = require("mongoose");
const routes = require("../routes/Route.js");
const bodyParser = require("body-parser");
const utentemodel = require("../models/UtenteModel.js");
const { afterEach, describe } = require("node:test");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = express();
const port = 4001;




describe("test rotte utente", () =>{
   var id_elem = 'aaa';
   beforeAll(async () => {
    const mongoserver = await MongoMemoryServer.create();
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoserver.getUri())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');

        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    next();
    });

    var server = app.listen(port)
    routes(app);
})
    test("add element wrong", async() =>{
        const res = await request(app).post('/utenti').send();
        console.log(res.body)
        //expect(res.status).toBe(200);
        expect(res.body).toBe("Utente validation failed: codice_fiscale: Path `codice_fiscale` is required.")
    });

    test('get elements', async() =>{
        const res = await request(app).get('/utenti')
        console.log(res.body)
        var res_expected = {}
        expect(typeof res.body).toBe(typeof res_expected)
    });

    test('post element confirmed', async() =>{
        const res = await request(app).post('/utenti').send({
            codice_fiscale: "aaaabahgfsd",
            nome: 'Mario'
        });
        expect(res.body.codice_fiscale).toBe("aaaabahgfsd")
        id_elem = res.body._id;

    })

    test('patching element', async() => {
        const res = await request(app).patch('/utenti/'+id_elem).send({
            nome: 'Giuseppe'
        })
        expect(res.status).toBe(200);
    })


    test('deleting element succesfully', async() => {
       const res = await request(app).delete('/utenti/'+id_elem);
       console.log(res.body);
       expect(res.body).toBe('Utente successfully deleted'); 
    });

    test('deleting element wrong', async() =>{
        const res = await request(app).delete('/utenti/6464fb1d53f18b11b7772304eeee')
        //console.log(res.body);
        expect(res.body).toBe('Cast to ObjectId failed for value "6464fb1d53f18b11b7772304eeee" (type string) at path "_id" for model "Utente"');

    })

    test('patching element null', async() =>{
        const res = await request(app).patch('/utenti/'+id_elem).send({
            nome:'Giuseppe'
        })
        expect(res.body).toBe(null);
    })
});

describe('test rotte Sala', () => {
    var id_sal;
    test("add sala wrong", async() =>{
        const res = await request(app).post('/sale').send();
        console.log(res.body)
        //expect(res.status).toBe(200);
        expect(res.body).toBe("Sala validation failed: id: Path `id` is required.")
    });

    test('get sale', async() =>{
        const res = await request(app).get('/sale')
        console.log(res.body)
        var res_expected = {}
        expect(typeof res.body).toBe(typeof res_expected)
    });

    test('post sala confirmed', async() =>{
        const res = await request(app).post('/sale').send({
            id: "S05",
            costo: 10
        });
        expect(res.body.id).toBe("S05")
        id_sal = res.body._id;

    })

    test('patching sala', async() => {
        const res = await request(app).patch('/sale/'+id_sal).send({
            costo: 12
        })
        expect(res.status).toBe(200);
    })


    test('deleting sala succesfully', async() => {
       const res = await request(app).delete('/sale/'+id_sal);
       console.log(res.body);
       expect(res.body).toBe('Sala successfully deleted'); 
    });

    test('deleting sala wrong', async() =>{
        const res = await request(app).delete('/sale/6464fb1d53f18b11b7772304eeee')
        //console.log(res.body);
        expect(res.body).toBe('Cast to ObjectId failed for value "6464fb1d53f18b11b7772304eeee" (type string) at path "_id" for model "Sala"');

    })

    test('patching sala null', async() =>{
        const res = await request(app).patch('/sale/'+id_sal).send({
            costo: 13
        })
        expect(res.body).toBe(null);
    })
});

describe('test rotte Prenotazione', () => {
    var id_pren = 'aaa';
    
    test("add prenotazione wrong", async() =>{
        const res = await request(app).post('/prenotazioni').send({
            //id: 'P06',
            //data_inizio: "05/23/2023",
            //data_fine: "05/23/2023",
            //data_emissione: "04/22/2023"
        });
        //console.log(res.body)
        //expect(res.status).toBe(200);
        expect(res.body).toBe("Prenotazione validation failed: id: Path `id` is required.")
    });

    test('get prenotazioni', async() =>{
        const res = await request(app).get('/prenotazioni')
        console.log(res.body)
        var res_expected = {}
        expect(typeof res.body).toBe(typeof res_expected)
    });

    test('post prenotazione confirmed', async() =>{
        const res = await request(app).post('/prenotazioni').send({
            id: 'P06',
            data_inizio: "05/23/2023",
            data_fine: "05/23/2023",
            data_emissione: "04/22/2023",
            costo: 10
        });
        expect(res.body.id).toBe("P06")
        id_pren = res.body._id;

    })

    test('patching prenotazione', async() => {
        const res = await request(app).patch('/prenotazioni/'+id_pren).send({
            costo: 12
        })
        expect(res.status).toBe(200);
    })


    test('deleting prenotazione succesfully', async() => {
       const res = await request(app).delete('/prenotazioni/'+id_pren);
       console.log(res.body);
       expect(res.body).toBe('Prenotazione successfully deleted'); 
    });

    test('deleting prenotazione wrong', async() =>{
        const res = await request(app).delete('/prenotazioni/6464fb1d53f18b11b7772304eeee')
        //console.log(res.body);
        expect(res.body).toBe('Cast to ObjectId failed for value "6464fb1d53f18b11b7772304eeee" (type string) at path "_id" for model "Prenotazione"');

    })

    test('patching prenotazione null', async() =>{
        const res = await request(app).patch('/prenotazioni/'+id_pren).send({
            costo: 13
        })
        expect(res.body).toBe(null);
    })
});


describe('test rotte postazioni', () =>{
    var id_post = "aaa";
    
    afterAll(async () =>{
        //mockgoose.reset();
        
        await mongoose.disconnect();
        await mongoose.connection.close();
        //server.close(); 
        
        
    });
    test("add postazione wrong", async() =>{
        const res = await request(app).post('/postazioni').send();
        console.log(res.body)
        //expect(res.status).toBe(200);
        expect(res.body).toBe("Postazione validation failed: id: Path `id` is required.")
    });

    test('get postazioni', async() =>{
        const res = await request(app).get('/postazioni')
        console.log(res.body)
        console.log(res.body)
        var res_expected = {}
        expect(typeof res.body).toBe(typeof res_expected)
    });

    test('post postazioni confirmed', async() =>{
        const res = await request(app).post('/postazioni').send({
            id: "P09",
            costo: 10
        });
        expect(res.body.id).toBe("P09")
        id_post = res.body._id;

    })

    test('patching postazione', async() => {
        const res = await request(app).patch('/postazioni/'+id_post).send({
            costo: 12
        })
        expect(res.status).toBe(200);
    })


    test('deleting postazione succesfully', async() => {
       const res = await request(app).delete('/postazioni/'+id_post);
       console.log(res.body);
       expect(res.body).toBe('Postazione successfully deleted'); 
    });

    test('deleting postazione wrong', async() =>{
        const res = await request(app).delete('/postazioni/6464fb1d53f18b11b7772304eeee')
        //console.log(res.body);
        expect(res.body).toBe('Cast to ObjectId failed for value "6464fb1d53f18b11b7772304eeee" (type string) at path "_id" for model "Postazione"');

    })

    test('patching postazione null', async() =>{
        const res = await request(app).patch('/postazioni/'+id_post).send({
            costo: 13
        })
        expect(res.body).toBe(null);
    })
  
});






