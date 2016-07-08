describe('Controller: mainController', function(){
	beforeEach(module('weatherApp'));

	var scope, httpBackend, MainCtrl;

	beforeEach(inject(function($rootScope, $controller, $httpBackend, WeatherService, AppConstants){
		httpBackend = $httpBackend;
		scope = $rootScope;
		MainCtrl = $controller('MainCtrl', {
			$scope: scope,
			AppConstants: AppConstants,
			WeatherService: WeatherService
		});
	}));

	it('should be in progress until the end of the search', function(){
		var data = {
			query:{
				results:{
					item: "1"
				}
			}
		}
		scope.search = 'Porto';
		expect(scope.processing).toBe(undefined);
		scope.requestForecast();
		expect(scope.processing).toBe(true);
		expect(scope.error).toBe(false);
		httpBackend.expectGET('https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Porto")').respond(data);
		httpBackend.flush();
		expect(scope.processing).toBe(false);

	})

	it('should not request to yahoo if search is empty', function(){
		scope.search = '';
		scope.requestForecast();
		expect(scope.processing).toBe(undefined);
	});

	it('should get error if no results', function(){
		var data = {
			query:{
				results:null
			}
		}
		scope.search = 'Porto';
		scope.requestForecast();
		httpBackend.expectGET('https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Porto")').respond(data);
		httpBackend.flush();
		expect(scope.error).toBe(true);
	});

});
