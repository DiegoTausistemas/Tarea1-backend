const express = require('express');
const router = express.Router();

// Rutas
router.get('/user/list');
router.get('/user/profile');
router.put('/user');


module.exports = router;