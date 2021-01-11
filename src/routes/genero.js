const router = require('express-promise-router')();

const {
    index,
    newGenero,
    getGenero,
    replaceGenero,
    deleteGenero
} = require('../controllers/generoctr');

router.get('/', index);
router.post('/', newGenero);
router.get('/:generoId', getGenero);
router.put('/:generoId', replaceGenero);
router.delete('/:generoId', deleteGenero)




module.exports = router;