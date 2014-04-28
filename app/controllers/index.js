var init = function() {
	getWeather();
	$.index.open();

};


	// this is the event listener for the button
	//$.button.addEventListener(function() {
		//getWeather();
	//});
var getWeather = function() {
	var args = arguments[0] || {};

	//getting data
	var apiCall = Ti.Network.createHTTPClient();
	apiCall.open("GET", "http://api.wunderground.com/api/0686a531a29abea6/geolookup/q/37.776289,-122.395234.json");

	//on a successful load of data
	apiCall.onload = function() {
		try {
			//this takes the data from weather.com and makes it useable
			var json = JSON.parse(this.responseText);
			//this is were we are selecting the certain information from weather.com
			Ti.API.info('Full Location' + json.current_observation.display_location.full);
			Ti.API.info('temp_f= ' + json.current_observation.temp_f);
			Ti.API.info('weather=' + json.current_observation.weather);
			Ti.API.info('Feels Like=' + json.current_observation.feelslike_f);
			Ti.API.info('icon' + json.current_observation.icon_url);
			Ti.API.info('humidity =' + json.current_observation.relative_humidity);
			//wind data
			Ti.API.info('Wind direction =' + json.current_observation.wind_dir + 'mph');
			Ti.API.info('humidity =' + json.current_observation.wind_mph);
			Ti.API.info('humidity =' + json.current_observation.windchill_f);
			//pushes the data onto the index xml labels/views
			$.city.text = json.current_observation.display_location.full;
			$.temp.text = "Temp= " + json.current_observation.temp_f;
			$.feelsLike.text = "Feels Like= " + json.current_observation.feelslike_f;
			$.windMPH.text = 'Wind Speed=' + json.current_observation.wind_mph;
			$.windDir.text = 'Wind Direction=' + json.current_observation.wind_dir;
			$.windChill.text = 'Wind Chill=' + json.current_observation.windchill_f;
			$.humidity.text = "Humidity= " + json.current_observation.relative_humidity;
			$.skys.text = json.current_observation.weather;
			$.weatherIcon.image = json.current_observation.icon_url;
			wear(json.current_observation);
		} catch(e) {
			Ti.API.info(e);
		}

	};

	//executes send for data
	apiCall.send();

};
//grabbing the current location
if (Ti.Geolocation.locationServicesEnabled) {
    Titanium.Geolocation.purpose = 'Get Current Location';
    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) {
            Ti.API.error('Error: ' + e.error);
        } else {
            Ti.API.info(e.coords);
        }
    });
} else {
    alert('Please enable location services');
}

//this is the wear function that takes the current temp and spits out what to wear

var wear = function(data) {
	if (data.temp_f < 32 && data.feelslike_f < 32) {
		$.toWear.text = "Wear a winter jacket and pants";
	} else if (data.temp_f > 33 && data.temp_f < 60 && data.feelslike_f > 33 && data.feelslike_f < 60) {
		$.toWear.text = "Light jacket and pants";
	} else if (data.temp_f > 61 && data.temp_f < 75 && data.feelslike_f > 61 && data.feelslike_f < 75) {
		$.toWear.text = "T-shirts and jeans";
	} else if (data.temp_f > 76 && data.feelslike_f > 76) {
		$.toWear.text = "Shorts and no Shirts";
	}
};

init();
