const router = require('express-promise-router')();

const {
    index,
    newUsuario,
    getUsuario,
    replaceUsuario,
    deleteUsuario,
    newSong,
    

} = require('../controllers/usuarioctr');

router.get('/', index);
router.post('/', newUsuario);
router.post('/:usuarioId/canciones', newSong);
router.get('/:usuarioId', getUsuario);
router.put('/:usuarioId', replaceUsuario);
router.delete('/:usuarioId', deleteUsuario)






module.exports = router;