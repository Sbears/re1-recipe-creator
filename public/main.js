// (function(){
// var app = angular.module('recipeApp', []);

// var ingredientsArray = [];
// 	app.controller('RecipeController', function($scope, $http){
// 	 	$scope.ingredientsArray = [];
// 	 	$scope.enterIngredient = function($event){
// 	 		$event.preventDefault();
// 	 		console.log($scope.ingredient);
// 	 		$scope.ingredientsArray.push($scope.ingredient);
// 	 		console.log('ingredientsArray', $scope.ingredientsArray);
// 	 		$scope.ingredient = '';

// 	 	};

// 	 	$scope.formData = {};
// 	 	$scope.submitForm = function(){	 		
// 	 		console.log($scope.formData.title);
// 	 		var payload = {
// 	 			title: $scope.formData.title,
// 	 			description: $scope.formData.description,
// 	 			category: $scope.formData.category,
// 	 			meal: $scope.formData.meal,
// 	 			prepTime: $scope.formData.prepTime,
// 	 			cookTime: $scope.formData.cookTime,
// 	 			serves: $scope.formData.serves,
// 	 			yield: $scope.formData.yield,
// 	 			directions: $scope.formData.directions,
// 	 			ingredients: $scope.ingredientsArray
// 	 		};

// 		 	console.log('payload:', payload);

// 		  	$http.post('/recipe', payload)
// 		 		.success(function(data){
// 		 			console.log('post data', data);
// 		 	})
// 		 	 	.error(function(data){
// 		 	 		console.log(data);
// 	 	 	});	
// 	 	};

//  	});

// 	app.controller('UserController', function($scope, $http){
// 		console.log('test');
// 		$scope.formData = {};
// 		$scope.submitForm = function(){
// 			var payload = {
// 				firstName: formData.firstName,
// 				lastName: formData.lastName,
// 				email: formData.email,
// 				password: formData.password
// 			};

// 			console.log('user: ', payload);

// 			$http.post('/user', payload)
// 				.succes(function(data){
// 					console.log('post data ', data);
// 				})
// 				.error(function(){
// 					console.log(data);
// 				});

// 		};
// 	});




// })();
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
}

Ingredient.prototype.renderList = function() {
	if(!this.listel) {
		this.listel = $('#ingredient-list-tpl')
			.clone()
			.attr('id', null);
	}
	this.listel.text(this.ingredient);
	return this.listel;
}

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
	})

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

			
			dataForServer = oneRecipe



			$.post('/recipe', dataForServer, function(dataFromServer){
				console.log(dataFromServer);
			});
		 	$("#create-recipe-form")[0].reset();


		 });

			


});










