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





mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/techcloud', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('db is conected'))
.catch(err => console.log)

//Settings
app.set('port',process.env.PORT || 3000);

//Midleware
app.use(bodyParser.json());
app.use(morgan('dev'));


//routes
app.use('/usuarios', usersRoutes);
app.use('/tipoUsuarios', typeUsersRoutes); 
app.use('/cancion', songsRoutes);
app.use('/genero', genderRoutes);
app.use('/artista', artistRoutes);


//Autencticathion
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });


//Start process
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
