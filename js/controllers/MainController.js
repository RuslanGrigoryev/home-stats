app.controller('MainController', function($scope, dataFactory) {

	var data = dataFactory.getAllData();

	data.then(function(data) {

		$scope.data = data;

	}, function(msg, code){});

})