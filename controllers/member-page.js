var User = require('../models/user.js');
var Recipe = require('../models/recipes.js');
var async = require('async');


var memberController = {

	recipeBox: function(req, res){
		var recipeArray = [];
		async.map(req.user.recipes, function(recipeId, callback){
			Recipe.findById(recipeId, function(err, document){
				callback(null, document);
			});
			
		},function(err, results){
			//console.log(results[0].creator
				//);
			res.render('recipe-box',{recipes: results});
		});


		
	},

	memberAdd: function(req, res){
		var userData = req.body;
		var user = new User({
			firstName: userData.firstName,
			lastName: userData.lastName,
			email: userData.email,
			password: userData.password
		});

		user.save(function(err, results){
			res.send(userData);
		});

	}
};

module.exports = memberController;