const router = require('express-promise-router')();

const {
    index,
    newCancion,
    getCancion,
    replaceCancion,
    deleteCancion
} = require('../controllers/cancionctr');

router.get('/', index);
router.post('/', newCancion);
router.get('/:cancionId', getCancion);
router.put('/:cancionId', replaceCancion);
router.delete('/:cancionId', deleteCancion)




module.exports = router;