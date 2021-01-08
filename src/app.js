const bodyParser = require ('body-parser');
const morgan = require ('morgan');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
 
mongoose.connect('mongodb://localhost/techcloud', {
    useMongoClient: true
}).then(db => console.log())

//Settings
app.set('port',process.env.PORT || 3000);

//Midleware
app.use(bodyParser.json());
app.use(morgan('dev'));


//Start process
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
