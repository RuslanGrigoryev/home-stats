app.controller('TariffsController', function($scope, $http) {

	$http.get("/php/fetch_tariff.php")
	.success(function(data){

		$scope.showLoading = false;

	    $scope.tariffs = {

	    	'energy': data[0].energy,
	    	'water': data[0].water,
	    	'gaz': data[0].gaz

	    };

	})
	.error(function() {

	    $scope.data_tariffs = "error in fetching data";

	});

	$scope.saveNewTariffs = function(event) {

		event.preventDefault();

		$http({
		    method: 'POST',
		    url: '/php/calc_tariff.php',
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: {energy: $scope.tariffs.energy, water: $scope.tariffs.water, gaz: $scope.tariffs.gaz}
		}).success(function () {

			

		});

	};

});