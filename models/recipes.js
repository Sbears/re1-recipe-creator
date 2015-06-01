var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var recipeSchema = Schema({
	_creator: {type: String, ref: 'user'},
	title: String,
	description: String,
	category: String,
	meal: String,
	prepTime: Number,
	cookTime: Number,
	totalTime: Number,
	serves: Number,
	yield: String,
	ingredients: [String],
	directions: String

});

var Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;