const bodyParser = require ('body-parser');
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
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'}));


//routes
app.use('/api/usuarios',usersRoutes);
app.use('/api/tipoUsuarios', typeUsersRoutes); 
app.use('/api/canciones', songsRoutes);
app.use('/api/generos', genderRoutes);
app.use('/api/artistas', artistRoutes);
app.use('/api/auth', authRoutes);





//Start process
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
