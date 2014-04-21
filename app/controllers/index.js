var init = function() {
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
			Ti.API.info('icon' + json.current_observation.icon_url);
			Ti.API.info('humidity =' + json.current_observation.relative_humidity);
			//wind data
			Ti.API.info('Wind direction =' + json.current_observation.wind_dir);
			Ti.API.info('humidity =' + json.current_observation.wind_mph);
			Ti.API.info('humidity =' + json.current_observation.windchill_f);
	//pushes the data onto the index xml labels/views
			$.temp.text ="Temp= "+ json.current_observation.temp_f;
			$.feelsLike.text ="Feels Like= "+ json.current_observation.feelslike_f;
			$.windMPH.text= 'Wind Speed='+ json.current_observation.wind_mph;
			$.windDir.text='Wind Direction='+json.current_observation.wind_dir;
			$.windChill.text='Wind Chill='+json.current_observation.windchill_f;
			$.humidity.text ="Humidity= "+ json.current_observation.relative_humidity;
			$.skys.text = json.current_observation.weather;
			$.weatherIcon.image = json.current_observation.icon_url;
		} catch(e) {
			Ti.API.info(e);
		}

	};

	//executes send for data
	apiCall.send();

};

init();
