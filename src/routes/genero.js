const router = require('express-promise-router')();

const {
    index,
    newGenero,
    getGenero,
    replaceGenero,
    deleteGenero
} = require('../controllers/generoctr');
const { verifyToken,verifyAdmin,verifyUser } = require('../middleware/authjwt');


router.get('/', index);
router.post('/',[verifyToken, verifyAdmin], newGenero);
router.get('/:generoId', getGenero);
router.put('/:generoId',[verifyToken, verifyAdmin], replaceGenero);
router.delete('/:generoId',[verifyToken, verifyAdmin], deleteGenero)




module.exports = router;