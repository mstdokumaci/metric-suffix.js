(function(environment) {
	environment = function (number, digits) {
		if (number < 1e3) return number;

		if (!digits) digits = 2;

		var exp = Math.floor(Math.log(number) / Math.log(1e3));
		number = number / Math.pow(1e3, exp);

	    var exp2 = Math.ceil(Math.log(number) / Math.log(1e1));
	    if (digits < exp2) digits = exp2;

    	return number.toPrecision(digits) + 'kMGTPE'.charAt(exp - 1);
	}
})(typeof exports === "undefined" ? window.metric_suffix : module.exports);
