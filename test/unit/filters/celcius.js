'use strict';

describe('Filter: Celcius', function() {

	beforeEach(module('weatherApp'));
	describe('celcius', function() {

		if ('should convert farenheit to celcius', inject(function (celcius) {
				expect(celcius(66)).toBe(18);
		}));

	});

});