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

app.controller('ChartController', function($scope) {

	var data = {
	    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.5)",
	            strokeColor: "rgba(220,220,220,0.8)",
	            highlightFill: "rgba(220,220,220,0.75)",
	            highlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 80, 81, 56, 55, 40]
	        },
	        {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.5)",
	            strokeColor: "rgba(151,187,205,0.8)",
	            highlightFill: "rgba(151,187,205,0.75)",
	            highlightStroke: "rgba(151,187,205,1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	        }
	    ]
	};

	var ctx = document.getElementById("home_stats_pie_chart").getContext("2d");
	var myBarChart = new Chart(ctx).Bar(data);

});

app.controller('MainController', function($scope) {
	
})

