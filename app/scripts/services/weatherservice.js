/**
 *  @description Service to do the call to the yahoo API
 */
angular.module('weatherApp')
	.service('WeatherService', function ($rootScope, $http, $q, AppConstants) {

		return{
			getService: function (search) {

				var query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"%s\")";
				var endpoint = AppConstants.ENDPOINTYAHOO + query.replace("%s", search);

				var deferred = $q.defer();

				$http.get(endpoint)
					.success(function(success) {
						//success
						deferred.resolve(success);
					})
					.error(function(reason) {
						//error
						deferred.reject(reason);
					});

				return deferred.promise;
			}
		}
});