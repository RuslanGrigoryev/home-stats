app.controller('TariffsController', function($scope, $rootScope, $http) {

	$scope.tariffs = $rootScope.tariffs;

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