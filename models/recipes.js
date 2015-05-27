var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var recipeSchema = Schema({
	_creator: {type: Number, ref: 'user'},
	title: String,
	description: String,
	category: String,
	meal: String,
	prepTime: Number,
	cookTime: Number,
	totalTime: Number,
	serves: Number,
	yield: Number,
	ingredients: [],
	directions: String

});

var Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;