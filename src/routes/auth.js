const router = require('express-promise-router')();

const {
    singUp,
    login
   
} = require('../controllers/authcontroller');

router.post('/singup', singUp);
router.post('/login', login);


module.exports = router;