angular.module("RouteControllers", [])
	.controller("HomeController", function($scope) {
		$scope.title = "Allan Ma: Personal Training";
	})

	.controller("AboutController", function($scope) {
		$scope.title = "About Me";
	})
	
	.controller("WorkoutController", function($scope) {
		$scope.title = "Your Workout";
	})

	.controller("FAQController", function($scope) {
		$scope.title = "FAQ";
	})
	
	.controller("ContactController", function($scope) {
		$scope.title = "Contact Me";
	})