const express = require('express');
const router = express.Router();

const {
    index
} = require('../controllers/usuario');

router.get('/', index);

module.exports = router;