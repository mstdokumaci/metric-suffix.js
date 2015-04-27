
var metric_suffix = require('../metric-suffix');

var assert = require('assert');

describe('Metric Suffix', function () {
	it('should return expected results', function () {
		assert.equal(42, metric_suffix(42));
		assert.equal(999, metric_suffix(999));
		assert.equal('1.0k', metric_suffix(1000));

		assert.equal('1.2k', metric_suffix(1234, 2));
		assert.equal('12k', metric_suffix(12345, 2));
		assert.equal('123k', metric_suffix(123456, 2));

		assert.equal('1.23k', metric_suffix(1234, 3));
		assert.equal('12.3k', metric_suffix(12345, 3));
		assert.equal('123k', metric_suffix(123456, 3));

		assert.equal('1.234k', metric_suffix(1234, 4));
		assert.equal('12.35k', metric_suffix(12345, 4));
		assert.equal('123.5k', metric_suffix(123456, 4));

		assert.equal('987k', metric_suffix(986725));
		assert.equal('986.7k', metric_suffix(986725, 4));
		assert.equal('987M', metric_suffix(986725123));
		assert.equal('986.73M', metric_suffix(986725123, 5));
	});	
});
