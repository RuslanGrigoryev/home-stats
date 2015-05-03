app.controller('AddNewController', function($scope, $http) {

	$scope.monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	$scope.sendNewData = function(event) {

		event.preventDefault();
		
		$http({
		    method: 'POST',
		    url: '/php/calc_indicators.php',
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: {month: $scope.month, energy: $scope.energy, water: $scope.water, gaz: $scope.gaz}
		}).success(function () {

			$scope.successData = true;

			$scope.energy = $scope.water = $scope.gaz = 0;

		});

	};

});