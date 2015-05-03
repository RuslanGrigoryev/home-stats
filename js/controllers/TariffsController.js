app.controller('TariffsController', function($scope) {

	$scope.tariffs = {

		'energy': 0.45,
		'water': 6.20,
		'gaz': 200.29

	};

	$scope.saveNewTariffs = function(event) {

		event.preventDefault();

	};

});