
var init = function(){
	getWeather();
	$.index.open();
};




var getWeather = function() {
	var args = arguments[0] || {};

	//getting data
	var apiCall = Ti.Network.createHTTPClient();
	apiCall.open("GET", "http://api.wunderground.com/api/0686a531a29abea6/conditions/q/CA/San_Francisco.json");

	//on a successful load of data
	apiCall.onload = function() {
		try {
			var json = JSON.parse(this.responseText);

			Ti.API.info('temp_f= ' + json.current_observation.temp_f);

		} catch(e) {
			Ti.API.info(e);
		}

	};

	//executes send for data
	apiCall.send();
	
};

init();
