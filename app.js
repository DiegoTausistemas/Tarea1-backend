// Importacion Dependencias
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();


// app express
const app = express();


// Ejecutamos conexión a MongoDB
const dataBase = require('./lib/mongoose').db;
dataBase();

// Middleware
app.use(morgan('dev'));


// Puerto
const port = process.env.PORT || 8000;        //--> si no toma el puerto de la DB toma por defecto el que le asigno yo


//Listen port
app.listen(port, () => {
    console.log(`Servidor iniciado en puerto: ${port}`);
});