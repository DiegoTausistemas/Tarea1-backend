// Importacion Dependencias
const express = require('express');
const expressValidator = require("express-validator");
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();


// Importacion de Rutas
const authRoutes = require('./routes/auth');
const fileRoutes = require('./routes/file');
const relationRoutes = require('./routes/relation');
const tweetRoutes = require('./routes/tweet');
const userRoutes = require('./routes/user');


// App express
const app = express();


// Ejecutamos conexión a MongoDB
const dataBase = require('./lib/mongoose').db;
dataBase();


// Middleware
app.use(morgan('dev'));
app.use(expressValidator());


// Middleware de rutas (ruta padre)
app.use('/api', authRoutes);
app.use('/api', fileRoutes);
app.use('/api', relationRoutes);
app.use('/api', tweetRoutes);
app.use('/api', userRoutes);


// Port
const port = process.env.PORT || 8000;


// Listen port
app.listen(port, () => {
    console.log(`Servidor iniciado en puerto: ${port}`);
});