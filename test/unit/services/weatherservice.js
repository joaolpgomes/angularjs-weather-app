'use strict';

describe('Service: WeatherService', function () {
	beforeEach(module('weatherApp'));

	var httpBackEnd, wService

	beforeEach(inject(function(_$httpBackend_, WeatherService) {
		httpBackEnd = _$httpBackend_;
		wService = WeatherService;
	}));

	it ('should get a promise', function() {
		var data = {
			query:{
				results:{
					item: "1"
				}
			}
		}
		var promise = wService.getService('Porto');

		expect(promise).not.toBe(null);

		httpBackEnd.expectGET('https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Porto")').respond(data);
		httpBackEnd.flush();
	});

});
