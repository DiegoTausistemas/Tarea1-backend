const express = require('express');
const router = express.Router();


const {
  fieldValidator
} = require('../validator');


//Rutas
router.post('/signup', fieldValidator);
router.post('/login', fieldValidator);


module.exports = router;