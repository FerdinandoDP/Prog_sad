require("dotenv").config();
const express = require("express");
const Prenotazione = require('./Controllers/ControllerPrenotazione');
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/Route.js");
const bodyParser = require("body-parser");

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.createConnection(process.env.DATABASE_URL);
db.on('error', (error)=>console.error(error));
db.once('open', ()=>console.log("Database Connected"));

//listen to port 4000
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




app.listen(process.env.PORT, ()=> console.log("Server Started at port:"+ process.env.PORT));


routes(app);



//