const router = require('express-promise-router')();
const upload = require('../libs/multer')
const {
    index,
    newCancion,
    getCancion,
    replaceCancion,
    deleteCancion
} = require('../controllers/cancionctr');

router.get('/', index);
router.post('/', upload.single('imagen'),newCancion);
router.get('/:cancionId', getCancion);
router.put('/:cancionId', upload.single('imagen','cancion'),replaceCancion);
router.delete('/:cancionId', deleteCancion)




module.exports = router;