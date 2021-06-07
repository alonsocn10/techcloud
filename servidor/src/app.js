const bodyParser = require('body-parser')
const morgan = require ('morgan');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const usersRoutes = require('./routes/usuario');
const typeUsersRoutes = require('./routes/tipoUsuario');
const songsRoutes = require('./routes/cancion');
const genderRoutes = require('./routes/genero');
const artistRoutes = require('./routes/artista');
const authRoutes = require('./routes/auth');
const cors = require ('cors');
const upload = require('./libs/multer');
const path = require('path');
const Pdfprinter = require('pdfmake')
const fs = require ('fs')
const fonts = require('./fonts');
const styles = require('./styles');
const {content} = require('./pdfContent');

let docDefinition = {
    content: content,
    styles: styles
}
 const printer = new Pdfprinter(fonts);

 let pdfDoc = printer.createPdfKitDocument(docDefinition);
 pdfDoc.pipe(fs.createWriteStream("src/pdfs/"+Date.now()+".pdf"));
 pdfDoc.end();



mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/techcloud', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(db => console.log('db is conected'))
.catch(err => console.log)

//Settings
app.set('port',process.env.PORT || 3000);

//verifyToken

//Midleware
// Analizar cuerpo
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'})); 
app.use(express.static('public'));


//routes
app.use('/api/usuarios',usersRoutes);
app.use('/api/tipoUsuarios', typeUsersRoutes); 
app.use('/api/canciones', songsRoutes);
app.use('/api/generos', genderRoutes);
app.use('/api/artistas', artistRoutes);
app.use('/api/auth', authRoutes);
app.use('/uploads', express.static(path.resolve('uploads')));
app.use('/pdfs', express.static(path.resolve('src/pdfs')));






//Start process
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
