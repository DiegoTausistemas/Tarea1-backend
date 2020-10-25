const express = require('express');
const router = express.Router();


// Rutas
router.get('/relation');
router.post('/relation/create/:userRelationId');
router.delete('/relation/:userRelationId');

// Params
router.param('userRelationId', userRelationId);


module.exports = router;