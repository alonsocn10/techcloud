const bodyParser = require ('body-parser');
const morgan = require ('morgan');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const usersRoutes = require('./routes/usuario');

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
app.use('/usuarios', usersRoutes) 

//Start process
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
