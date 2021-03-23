const router = require('express-promise-router')();

const {
    index,
    newArtista,
    getArtista,
    replaceArtista,
    deleteArtista
} = require('../controllers/artistactr');
const { verifyToken,verifyAdmin } = require('../middleware/authjwt');

router.get('/', index);
router.get('/plist',[verifyToken, verifyAdmin], index);
router.post('/',[verifyToken, verifyAdmin], newArtista);
router.get('/:artistaId', getArtista);
router.put('/:artistaId',[verifyToken, verifyAdmin], replaceArtista);
router.delete('/:artistaId',[verifyToken, verifyAdmin], deleteArtista)




module.exports = router;