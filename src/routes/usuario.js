const router = require('express-promise-router')();

const {
    index,
    newUsuario,
    getUsuario,
    replaceUsuario,
    deleteUsuario,
    getCanciones,
    newUsuarioSong,
    getTipoUsuario,
    pushTipoUsuario

} = require('../controllers/usuarioctr');

router.get('/', index);
router.post('/', newUsuario);
router.post('/:usuarioId/canciones', newUsuarioSong);
router.get('/:usuarioId', getUsuario);
router.put('/:usuarioId', replaceUsuario);
router.delete('/:usuarioId', deleteUsuario)
router.post('/:usuarioId/tipoUsuario', pushTipoUsuario);
router.get('/:usuarioId/canciones', getCanciones);






module.exports = router;