app.factory('dataFactory', function($http, $q){
	return {

		'getAllIndicators': function(){

			var deffered = $q.defer();

			var pp = $http.get('/php/fetch_indicators.php')

				.success(function(data){
					
					deffered.resolve(data);
					
				})
				
				.error(function(msg){
					
					deffered.reject(msg);
					
				});

			return deffered.promise;
			
		}
		
	};
	
});