angular.module("PTSite", ["ngRoute", "RouteControllers"]); 

angular.module("PTSite").config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
	
	$routeProvider
	.when("/", {
		templateUrl: "templates/home.html",
		controller: "HomeController"
	})
	.when("/aboutme", {
		templateUrl: "templates/aboutme.html",
		controller: "AboutController"
	})
	.when("/yourworkout", {
		templateUrl: "templates/yourworkout.html",
		controller: "WorkoutController"
	})
	.when("/faq", {
		templateUrl: "templates/faq.html",
		controller: "FAQController"
	})
	.when("/contactme", {
		templateUrl: "templates/contactme.html",
		controller: "ContactController"
	})
	.when("/thankyou", {
		templateUrl:"templates/thankyou.html",
		controller: "ThankyouController"
	});
});