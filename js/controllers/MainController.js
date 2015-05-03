app.controller('MainController', function($scope, $rootScope, $http, dataFactory) {

	var data = dataFactory.getAllData();

	data.then(function(data) {
 
		$scope.data = data;

	}, function(msg, code){});

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