(function(){
var app = angular.module('recipeApp', []);

var ingredientsArray = [];
	app.controller('RecipeController', function($scope, $http){
	 	$scope.ingredientsArray = [];
	 	$scope.enterIngredient = function($event){
	 		$event.preventDefault();
	 		console.log($scope.ingredient);
	 		$scope.ingredientsArray.push($scope.ingredient);
	 		console.log('ingredientsArray', $scope.ingredientsArray);
	 		$scope.ingredient = '';

	 	};

	 	$scope.formData = {};
	 	$scope.submitForm = function(){	 		
	 		console.log($scope.formData.title);
	 		var payload = {
	 			title: $scope.formData.title,
	 			description: $scope.formData.description,
	 			category: $scope.formData.category,
	 			meal: $scope.formData.meal,
	 			prepTime: $scope.formData.prepTime,
	 			cookTime: $scope.formData.cookTime,
	 			serves: $scope.formData.serves,
	 			yield: $scope.formData.yield,
	 			directions: $scope.formData.directions,
	 			ingredients: $scope.ingredientsArray
	 		};

		 	console.log('payload:', payload);

		  	$http.post('/recipe', payload)
		 		.success(function(data){
		 			console.log('post data', data);
		 	})
		 	 	.error(function(data){
		 	 		console.log(data);
	 	 	});	
	 	};

 	});

	app.controller('UserController', function($scope, $http){
		console.log('test');
		$scope.formData = {};
		$scope.submitForm = function(){
			var payload = {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				password: formData.password
			};

			console.log('user: ', payload);

			$http.post('/user', payload)
				.succes(function(data){
					console.log('post data ', data);
				})
				.error(function(){
					console.log(data);
				});

		};
	});




})();






