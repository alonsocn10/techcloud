const router = require('express-promise-router')();
const upload = require('../libs/multer.js');


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
router.post('/',[verifyToken, verifyAdmin],upload.single('imagen'), newArtista);
router.get('/:artistaId', getArtista);
router.put('/:artistaId',[verifyToken, verifyAdmin],upload.single('imagen'), replaceArtista);
router.delete('/:artistaId',[verifyToken, verifyAdmin], deleteArtista)




module.exports = router;