var Recipe = require('../models/recipes.js');
var User = require('./authentication.js');

var recipeController = {
	recipeForm: function(req, res){
		res.render('recipe-form-page');
	},



	recipeAdd: function(req, res){
		var recipeData = req.body;
		console.log('recipeData: ', recipeData);
		var recipe = new Recipe({
			_creator: req.user.id,
			title: recipeData.title,
			description: recipeData.description,
			category: recipeData.category,
			meal: recipeData.meal,
			prepTime: recipeData.prepTime,
			cookTime: recipeData.cookTime,
			serves: recipeData.serves,
			yield: recipeData.yield,
			ingredients: recipeData.ingredients,
			directions: recipeData.directions

		});


		// recipe.save(function(err, results){
		// 	console.log(err)
		// 	console.log(results)
		// 	res.send(recipe);
		// })

		recipe.save(function(err, results){
			console.log(err);
			req.user.recipes.push(recipe);
			req.user.save(function(err, user){
				res.send(recipe);
			})

		});
			

		
	}


};

module.exports = recipeController;