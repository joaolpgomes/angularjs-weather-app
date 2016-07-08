'use strict';
/**
 * @description Controller to handle the logic between the service and the view
 */
angular.module('weatherApp')
	.controller('MainCtrl', ['$scope','WeatherService', function ($scope, WeatherService) {
		var search;

		$scope.requestForecast = function(){

			// if search input less than 2 characters or if the request in progress or if is the same search
			if($scope.search.length < 2 || $scope.processing || search === $scope.search) return;

			search = $scope.search; // prevents to request the same input
			$scope.error = false; // handles error message
			$scope.processing = true; // requests status
			WeatherService.getService($scope.search).then(function(result){
				//if our search returns results
				if(result.query.results) {
					$scope.forecastResult = result.query.results.channel;
				}else{
					$scope.error = true;
				}
				$scope.processing = false;

			}, function(error){
				$scope.error = true;
				$scope.processing = false;
			});
		}
	}]);
