const router = require('express').Router();

const htmlController = require('./../../controllers/htmlController')

router.route('/')
    .get(htmlController.getHome);


router.route('/notes')
    .get(htmlController.getNotes);

module.exports = router;