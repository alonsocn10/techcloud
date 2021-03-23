const router = require('express-promise-router')();

const {
     singUp, login, check } = require ('../controllers/authcontroller');
     const { verifyToken,verifyAdmin,verifyUser } = require('../middleware/authjwt');


router.post('/singup', singUp ,[verifyToken, verifyAdmin]);
router.post('/login', login,[verifyToken,verifyAdmin]);
router.get('/check', check);



module.exports = router;