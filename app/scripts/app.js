'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
    'ngRoute',
    'angular-loading-bar'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider
      .when('/', {
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
