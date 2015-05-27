var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var recipeController = require('./controllers/recipe-form.js');
var memberController = require('./controllers/member-page.js');
var pairingController = require('./controllers/pairing.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/re1');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', indexController.index);
app.get('/recipe-form-page', recipeController.recipeForm);
app.post('/recipe', recipeController.recipeAdd);
app.get('/recipe-box', memberController.recipeBox);
app.post('/user', memberController.memberAdd);
app.get('/pairing-playground', pairingController.pair);

var server = app.listen(6673, function() {
	console.log('Express server listening on port ' + server.address().port);
});
