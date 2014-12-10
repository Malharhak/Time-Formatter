var timeFormat = function (time, options) {
	console.log(options.format);
	var result = "";
	if  (options.format === "milliseconds") {
		console.log("lol");
		time = time / 1000;  // Time  is in milliseconds
	}
	if (options.hours) {
		if (time >= 3600) { // More than an hour -> show hours
			var hours = Math.floor(time / 3600);
			if (hours < 10) {
				result = "0" + hours;
			} else {
				result = hours;
			}
		} else {
			result = "0";
		}
		if (options.minutes) result += ":";
		time -= (hours * 3600);
	}
	if (options.minutes) { // Show minutes or not
		if (time >= 60) { // More than 60 seconds --> Show minutes
			var mins = Math.floor(time / 60);
			if (mins < 10) {
				result += "0" + mins;
			} else {
				result += mins;
			}
		} else {
			result += "0";
		}
		if (options.seconds) result += ":";
		time -= (mins * 60);
	}
	if (options.seconds) {
		var seconds = Math.floor(time % 60);
		if (seconds < 10) result += "0";
		result += seconds;
		if (options.milliseconds) result += ":";
	}
	if (options.milliseconds) {
		var ms = time % 1;
		ms = Math.floor(ms * 100);
		if (ms < 10) result += "0";
		result += ms;
	}
	return result;
};