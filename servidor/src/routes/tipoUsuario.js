const router = require('express-promise-router')();

const {
    index,
    newtipoUsuario,
    gettipoUsuario,
    replacetipoUsuario,
    deletetipoUsuario
} = require('../controllers/tipoUsuarioctr');

router.get('/', index);
router.post('/', newtipoUsuario);
router.get('/:tipoUsuarioId', gettipoUsuario);
router.put('/:tipoUsuarioId', replacetipoUsuario);
router.delete('/:tipoUsuarioId', deletetipoUsuario)




module.exports = router;