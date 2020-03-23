const router = require('express').Router();

const notesApi = require('./notesApi');

// '/api' is prepended to every route
router.use('/notes', notesApi);

module.exports = router;