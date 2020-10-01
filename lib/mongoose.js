const mongoose = require('mongoose');
require('dotenv').config();

// Conexion a MongoDB
const db = async () => {
  try{
    const success = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,        // bandera para nueva conexion a DB (confirma nueva conexion)
      useUnifiedTopology: true,
      useCreateIndex: true,         // Crea instancia de la conexion
      useFindAndModify: false       // con el false puedo usar todo lo nativo de consultas de mongo
    });
    console.log('Base Mongo conectada...');
  } catch(error) {
    console.log('DB conexion, error', error);
  }
};

exports.db = db;