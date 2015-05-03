var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
		.when('/chart', {

			templateUrl: 'partials/canvas.html',

			controller: 'ChartController'
		})
		.when('/', {

			templateUrl: 'partials/main.html',

			controller: 'MainController'

		})
		.when('/new', {
			templateUrl: 'partials/new.html',

			controller: 'AddNewController'
		})
		.when('/tariffs', {
			templateUrl: 'partials/tariffs.html',

			controller: 'TariffsController'
		})
		.otherwise({

			redirectTo: "/"

		});

});

