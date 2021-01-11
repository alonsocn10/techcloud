const router = require('express-promise-router')();

const {
    index,
    newArtista,
    getArtista,
    replaceArtista,
    deleteArtista
} = require('../controllers/artistactr');

router.get('/', index);
router.post('/', newArtista);
router.get('/:artistaId', getArtista);
router.put('/:artistaId', replaceArtista);
router.delete('/:artistaId', deleteArtista)




module.exports = router;