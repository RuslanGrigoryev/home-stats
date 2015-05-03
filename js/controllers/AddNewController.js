app.controller('AddNewController', function($scope, $http) {

	$scope.sendNewData = function(event) {

		event.preventDefault();
		
		$http({
		    method: 'POST',
		    url: '/php/get.php',
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: {energy: $scope.energy, water: $scope.water, gaz: $scope.gaz}
		}).success(function () {

			$scope.successData = true;

			$scope.energy = $scope.water = $scope.gaz = 0;

		});

	};

});