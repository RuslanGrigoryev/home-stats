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
		.otherwise({

			redirectTo: "/"

		});

});

