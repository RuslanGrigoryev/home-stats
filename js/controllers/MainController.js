app.controller('MainController', function($scope, $rootScope, $http, dataFactory) {

	var data = dataFactory.getAllIndicators();

	data.then(function(data) {
 
		$scope.indicators = [];

		$scope.total = {

			'energy' : 0,
			'water': 0,
			'gaz': 0

		};

		data.forEach(function(key) {

			$scope.indicators.push(
				{
					"date": key.date,
					"month": key.month,
					"energy": parseFloat(key.energy),
					"water": parseFloat(key.water),
					"gaz": parseFloat(key.gaz)
				}
			);

			$scope.total.energy += parseFloat(key.energy);
			
			$scope.total.water += parseFloat(key.water);
			
			$scope.total.gaz += parseFloat(key.gaz);

		});
		
		$scope.successData = true;

	}, function(msg, code){


	});

	$http.get("/php/fetch_tariff.php")
	.success(function(data){

	    $scope.tariffs = {

	    	'energy': parseFloat( data[0].energy ),
	    	'water': parseFloat( data[0].water),
	    	'gaz': parseFloat( data[0].gaz)

	    };

	    $rootScope.tariffs = $scope.tariffs;

	})
	.error(function() {

	    $scope.tariffs = "error in fetching data";

	});

});