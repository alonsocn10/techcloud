const router = require('express-promise-router')();
const upload = require('../libs/multer.js');



const {
     singUp, login, check } = require ('../controllers/authcontroller');
     const { verifyToken,verifyAdmin,verifyUser } = require('../middleware/authjwt');


router.post('/singup' ,upload.single('imagen'), singUp);
router.post('/login', login,[verifyToken,verifyAdmin]);
router.get('/check', check);



module.exports = router;