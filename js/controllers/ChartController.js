app.controller('ChartController', function($scope, dataFactory) {

	var data = dataFactory.getAllData();

	data.then(function(data) {

		$scope.data = data;

		var ctx = document.getElementById("home_stats_pie_chart").getContext("2d");

		var myBarChart = new Chart(ctx).Bar(data);

	}, function(msg, code){});

});