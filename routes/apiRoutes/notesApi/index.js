const router = require('express').Router();

const notesController = require('./../../../controllers/notesController')

router.route('/')
    .get(notesController.getNotes)
    .post(notesController.createNotes)

module.exports = router;