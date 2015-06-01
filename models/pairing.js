var ingredients = [];

var Ingredient = function(ingredient){
	this.ingredient = ingredient;
}

var addIngredient = function(ingredient){
	var Ingredient = new ingredient;
	pairing.addIngredient.push(ingredient);
	res.redirect('/')
};