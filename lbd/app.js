var exp = require('express');
var app = exp.createServer();
var mongoose = require('mongoose');
var THREE = require('three');
var colors = require('colors');

app.root = __dirname;
global.host = 'localhost';

mongoose.connect( "mongodb://localhost:27017/lbdatabase" );
mongoose.connection.on('open', function(){
	console.log('Connected to Mongoose');
});
require('./app/config')(app, exp);
//require('./app/server/dbconfig')(app);
require('./app/server/router')(app);


app.listen(8888, function(){
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});