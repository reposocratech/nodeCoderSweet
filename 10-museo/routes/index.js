const express = require('express');
const indexController = require('../controllers/indexControllers')
const router = express.Router();

router.get('/',  indexController.home);

module.exports = router;
