
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
			//this takes the data from weather.com and makes it useable
			var json = JSON.parse(this.responseText);
			//this is were we are selecting the certain information from weather.com
			Ti.API.info('temp_f= ' + json.current_observation.temp_f);
			Ti.API.info('weather=' + json.current_observation.weather);
			Ti.API.info('Feels Like=' + json.current_observation.feelslike_f);
			Ti.API.info('Picture'+ json.currrent_observation.icon);
			Ti.API.info('icon'+ json.current_observation.icon_url);
		} catch(e) {
			Ti.API.info(e);
		}

	};

	//executes send for data
	apiCall.send();
	
};

init();
