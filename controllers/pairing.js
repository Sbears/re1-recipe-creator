// var pairing = require(../models/pairing.js)

ingredients = [];
var pairingController = {
	// pair: function(res, send){
	// res.render('pairing-playground');
	// },
	clearIng: function(req, res){
		console.log(req.user);
		res.send('hello');
	},

	addIngredient: function(req, res){
		console.log(req.body.newList);
		//console.log(req.body.ingredient);
		if(req.body.ingredient){
			if(req.body.ingredient !== ""){
		    ingredients.push(req.body.ingredient)
		    res.redirect('/');
			}
		} else if(req.body.newList){
			ingredients = req.body.newList;
			console.log(ingredients);
			if(req.body.ingredient){
			ingredients.push(req.body.ingredient);
			console.log(ingredients);
			res.redirect('/')
			}
			res.redirect('/')
		}
	},
};

module.exports = pairingController;