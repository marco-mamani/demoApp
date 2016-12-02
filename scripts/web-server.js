var express = require('express');
var path =  require('path');
var events = require('./eventsController')
var users = require('./usersController')
var app = express();
var rootPath = path.normalize(__dirname + /../);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));
app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);
app.post('/data/users', users.save);  //Crea un nuevo usuario
app.get('/data/users/:id', users.get);  //Obtiene la information de un nuevo usuario
// app.put('/data/users/:id', users.put);  //Actualiza un usuario
// app.delete('/data/users/:id', users.delete);  //Borra un usuario


app.listen(8000);
console.log('License on port 8000....');
