/**
 *  @description Filter to convert fahrenheit to celsius
 */
angular.module('weatherApp')
	.filter('celsius', [function() {
		return function(fahrenheit) {
			return Math.round((fahrenheit - 32) * 5.0 / 9.0);
		};
	}]);