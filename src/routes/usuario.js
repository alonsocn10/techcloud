const router = require('express-promise-router')();

const {
    index,
    newUsuario,
    getUsuario,
    replaceUsuario,
    deleteUsuario,
    newSong,
    

} = require('../controllers/usuarioctr');
const { verifyToken,verifyAdmin,verifyUser } = require('../middleware/authjwt');

router.get('/', [verifyToken, verifyAdmin],index);
router.post('/', [ verifyUser,verifyAdmin,verifyToken],newUsuario);
router.post('/:usuarioId/canciones', newSong);
router.get('/:usuarioId', [ verifyUser,verifyAdmin,verifyToken],getUsuario);
router.put('/:usuarioId', [ verifyUser,verifyAdmin,verifyToken],replaceUsuario);
router.delete('/:usuarioId', [ verifyUser,verifyAdmin,verifyToken],deleteUsuario)






module.exports = router;