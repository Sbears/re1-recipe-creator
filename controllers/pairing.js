var pairing = require('../models/pairing-model.js');


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

		console.log(req.body.ingredient);
		if(req.body.ingredient){
			var ingredient = req.body.ingredient;

			if(ingredient !== ""){
		    req.session.ingredients.push(ingredient);
		 //   res.redirect('/');
				//console.log(req.session.ingredients);	

					if (req.session.ingredients.length === 1) {
						match = pairing.firstMatch(req.session.ingredients);
					}	else {
						match = pairing.createMatchArray(pairing.firstMatch(req.session.ingredients));
					}

			}
		} else if(req.body.newList){
			req.session.ingredients = req.body.newList;
			//console.log(req.session.ingredients);
					if (req.session.ingredients.length === 1) {
						match = pairing.firstMatch(req.session.ingredients);
					}	else {
						match = pairing.createMatchArray(pairing.firstMatch(req.session.ingredients));
					}
		}
		// if(match.length > 1)
		// 	for (var i = 0; i < match.length-1; i++) {
		// 		match = match[i].concat(match[i+1]);
		// 	}
		req.session.match = match;
		console.log(match);
		res.redirect('/');
	},
};

module.exports = pairingController;