var ingredients = require('./match-data.json');
// var ingredients = [];

// var Ingredient = function(ingredient){
// 	this.ingredient = ingredient;
// };

// var addIngredient = function(ingredient){
// 	var Ingredient = new ingredient;
// 	pairing.addIngredient.push(ingredient);
// 	res.redirect('/');
// };


// Create an Array of Arrays of matches from Items in "In Box"
// arrayFromClient = ['ginger', 'rice','bok choy'];

var firstMatch = function(arrayFromClient){
	var firstMatchArray = [];
 	for (var i = 0; i < arrayFromClient.length; i++) {

 		for (var j = 0; j < ingredients.length; j++) {
 			ingredient = ingredients[j].ingredient.toUpperCase();
 			ingredientMatch = arrayFromClient[i].toUpperCase();

 			if (ingredient.indexOf(ingredientMatch) >= 0) {
 				firstMatchArray.push(ingredients[j].allP);
 			}
 		}
 	}
 	return firstMatchArray;
};

//  Create an Array of Matches between Arrays from  First Match
//console.log(firstMatch(arrayFromClient));
createMatchArray = function(firstMatchArray){
	var newArray = [];
	var finalArray ;
	var	compareArrays = function(arr, arr2) {
		return arr2.filter(function(i) {return arr.indexOf(i) >= 0;});
	};

	for (var i = 0; i < firstMatchArray.length-1; i++) {
		var obj = {};
		if(i===0){
			finalArray = compareArrays(firstMatchArray[i],firstMatchArray[i+1]);
			newArray.push(finalArray);

		} else {
			finalArray = compareArrays(finalArray,firstMatchArray[i+1]);
			newArray.push(finalArray);

		}
	}
	return newArray;
};

//console.log(createMatchArray(firstMatch(arrayFromClient)));

module.exports = {
	firstMatch: firstMatch,
	createMatchArray: createMatchArray
};