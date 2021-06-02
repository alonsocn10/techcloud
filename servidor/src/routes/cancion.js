const router = require('express-promise-router')();
const upload = require('../libs/multer')
const {
    index,
    newCancion,
    getCancion,
    replaceCancion,
    deleteCancion,
    getGenero
} = require('../controllers/cancionctr');

router.get('/', index);
router.post('/', upload.single('imagen'),newCancion);
router.get('/:cancionId', getCancion);
router.get('/genero/:genero', getGenero);
router.put('/:cancionId', upload.single('audio'),replaceCancion);
router.delete('/:cancionId', deleteCancion)




module.exports = router;