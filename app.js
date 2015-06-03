var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session =require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var passport = require('passport');
var _ = require('underscore');
var passportConfig = require('./config/passport');
var matchData = require('./models/match-data.json');


var indexController = require('./controllers/index.js');
var recipeController = require('./controllers/recipe-form.js');
var memberController = require('./controllers/member-page.js');
var pairingController = require('./controllers/pairing.js');
var authenticationController = require('./controllers/authentication');

mongoose.connect('mongodb://localhost/re1');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(flash());
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', indexController.index);

app.post('/user', memberController.memberAdd);
app.post('/recipe', recipeController.recipeAdd);
app.post('/clear-ing', pairingController.clearIng);
app.post('/addIngredient', pairingController.addIngredient);

app.get('/auth/login', authenticationController.login);
app.post('/auth/login', authenticationController.processLogin);
app.post('/auth/signup', authenticationController.processSignup);
app.get('/auth/logout', authenticationController.logout);





// ******** PRVENT UNAUTHORIZED ACCES BELOW ******//
app.use(passportConfig.ensureAuthenticated);
app.get('/recipe-form-page', recipeController.recipeForm);
app.post('/recipe', recipeController.recipeAdd);
app.get('/recipe-box', memberController.recipeBox);

//app.get('/pairing-playground', pairingController.pair);

var server = app.listen(6673, function() {
	console.log('Express server listening on port ' + server.address().port);
});

