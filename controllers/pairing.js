var pairing = require('../models/pairing-model.js');
var _=require('underscore');

var pairingController = {
	// pair: function(res, send){
	// res.render('pairing-playground');
	// },
	clearIng: function(req, res){
		console.log(req.user);
		res.send('hello');
	},

	addIngredient: function(req, res){
		//console.log(req.body.newList);
		if(!req.session.ingredients){
			req.session.ingredients =[];
		}

		//console.log(req.body.ingredient);
		if(req.body.ingredient){
			var ingredient = req.body.ingredient;

			if(ingredient !== ""){
		    req.session.ingredients.push(ingredient);

				//console.log(req.session.ingredients);	

					if (req.session.ingredients.length === 1) {
						match = pairing.firstMatch(req.session.ingredients);
						//console.log(match);
					}	else {
						match = pairing.createMatchArray(pairing.firstMatch(req.session.ingredients));
					}

			}
		} else if(req.body.newList){
			req.session.ingredients = req.body.newList;
			 //console.log(req.session.ingredients);
			// console.log(req.body.newList);
					if (req.session.ingredients.length === 1) {
						match = pairing.firstMatch(req.session.ingredients);
						console.log(match);
					}	else {
						match = pairing.createMatchArray(pairing.firstMatch(req.session.ingredients));
					}
		}
		//console.log('match outside if: ', match);
		// create a single array out of the match array of arrays
		match2 = match.join().split(',');
		match3 = _.uniq(match2);
		//console.log('match3: ', match3);

		req.session.match = match3;
		//console.log(req.session.match);
		res.redirect('/');
	},
};

module.exports = pairingController;