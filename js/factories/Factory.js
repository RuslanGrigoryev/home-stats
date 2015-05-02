app.factory('dataFactory', function($http, $q){
	return {

		'getAllData': function(){

			var deffered = $q.defer();

			var pp = $http.get('temp/data.json')

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