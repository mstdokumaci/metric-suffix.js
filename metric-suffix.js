(function (environment) {
	'use strict';

	function metric_suffix (number, digits) {
		if (number < 0) return 0;
		if (number < 1e3) return number;
		
		if (!digits) digits = 2;
		
		var exp = Math.floor(Math.log(number) / Math.log(1e3));
		number = number / Math.pow(1e3, exp);
		
		var exp2 = Math.ceil(Math.log(number) / Math.log(1e1));
		if (digits < exp2) digits = exp2;
		
		return +number.toPrecision(digits) + 'kMGTPE'.charAt(exp - 1);
	}

	if (environment.exports)
		environment.exports = metric_suffix;
	else
		environment.metric_suffix = metric_suffix;
})(typeof exports === "undefined" ? window : module);
