const router = require('express-promise-router')();
const upload = require('../libs/multer.js');


const {
    index,
    newUsuario,
    getUsuario,
    replaceUsuario,
    deleteUsuario,
    

} = require('../controllers/usuarioctr');
const { verifyToken,verifyAdmin,verifyUser } = require('../middleware/authjwt');

router.get('/', [verifyToken, verifyAdmin],index);
router.post('/', [verifyAdmin,verifyToken],upload.single('imagen'),newUsuario,);
router.get('/:usuarioId', [ verifyAdmin,verifyToken],getUsuario);
router.put('/:usuarioId', [ verifyAdmin,verifyToken],upload.single('imagen'),replaceUsuario);
router.delete('/:usuarioId', [ verifyAdmin,verifyToken],deleteUsuario)






module.exports = router;