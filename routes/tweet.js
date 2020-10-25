const express = require('express');
const router = express.Router();

// Rutas
router.get('/tweets');
router.get('/tweets/followers');
router.post('/tweet/create');
router.delete('/tweet/:tweetId');

// Params
router.param('tweetId', tweetId);

module.exports = router;