


var Recipe = function(title, prepTime, cookTime, description, serves, recipeYield, ingredients, directions, category, meal) {
	console.log(arguments);
	this.title = title;
	this.prepTime = prepTime;
	this.cookTime = cookTime;
	this.totalTime = parseInt(prepTime) + parseInt(cookTime) || "";
	this.description = description;
	this.serves = serves;
	this.recipeYield = recipeYield;
	this.ingredients = ingredients;
	this.directions = directions;
	this.category = category;
	this.meal = meal;
};

var Ingredient = function(ingredient){
	this.ingredient = ingredient;
};

Ingredient.prototype.renderList = function() {
	if(!this.listel) {
		this.listel = $('#ingredient-list-tpl')
			.clone()
			.attr('id', null);
	}
	this.listel.text(this.ingredient);
	return this.listel;
};

$(document).on('ready', function(){

	var ingredientsArray = [];

	$('#enter-ingredient-button').on('click', function(e){
		
		e.preventDefault();
		var ingredient = $('.input-ingredient').val();
		console.log(ingredient);
		var oneIngredient = new Ingredient(ingredient);
		ingredientsArray.push(ingredient);
		$('.enter-ingredient-container').append(oneIngredient.renderList());
		$('.input-ingredient').val('');

		console.log(ingredientsArray);		
	});

$('#create-recipe-form').on('submit', function(e){
	e.preventDefault();
	var title = $(this).find(".input-name").val();
	var prepTime = $(this).find(".input-prep-time").val();
	var cookTime = $(this).find(".input-cook-time").val();
	var description = $(this).find(".input-description").val();
	var serves = $(this).find(".input-serves").val();
	var recipeYield = $(this).find(".input-yield").val();
	var ingredients = ingredientsArray;
	var directions = $(this).find(".input-directions").val();
	var category = $(this).find(".input-category").val();
	var meal = $(this).find(".input-meal").val();

	var oneRecipe = new Recipe(title, prepTime, cookTime, description, serves, recipeYield, ingredients, directions, category, meal);
 	console.log(oneRecipe);
 // 	console.log(oneRecipe.cookTime);
 // 	$(".recipe-viewing").append(oneRecipe.render());
	// $(".recipe-list-container").append(oneRecipe.renderList());

	
	dataForServer = oneRecipe;



	$.post('/recipe', dataForServer, function(dataFromServer){
		console.log(dataFromServer);
		$('#message').html('<p class="alert alert-success">'+dataFromServer+'</p>');
		location.href = '/recipe-box';
	});
 	$("#create-recipe-form")[0].reset();


 });

	


});










