const router = require('express-promise-router')();

const {
    index,
    newUsuario,
    getUsuario,
    replaceUsuario,
    deleteUsuario
} = require('../controllers/usuario');

router.get('/', index);
router.post('/', newUsuario);
router.get('/:usuarioId', getUsuario);
router.put('/:usuarioId', replaceUsuario);
router.delete('/:usuarioId', deleteUsuario)
router.get('/:usuarioId/tipoUsuario',)




module.exports = router;