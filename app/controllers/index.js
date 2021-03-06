var init = function() {
	
	geoLocation();
	//getWeather();
	$.index.open();
	

};


	// this is the event listener for the button

var getWeather = function(coords) {
	var args = arguments[0] || {};

	//getting data
	var apiCall = Ti.Network.createHTTPClient();
	apiCall.open("GET", "http://api.wunderground.com/api/0686a531a29abea6/conditions/q/"+coords.latitude +","+coords.longitude+".json");

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
			Ti.API.info('Wind direction =' + json.current_observation.wind_dir );
			Ti.API.info('humidity =' + json.current_observation.wind_mph);
			Ti.API.info('humidity =' + json.current_observation.windchill_f);
			//pushes the data onto the index xml labels/views
			$.city.text = json.current_observation.display_location.full;
			$.temp.text =  json.current_observation.temp_f + 'º';
			$.feelsLike.text = "Feels Like " + json.current_observation.feelslike_f+ 'º';
			$.windMPH.text = json.current_observation.wind_mph+ 'mph';
			$.windDir.text =  json.current_observation.wind_dir;
			$.windChill.text = 'Wind Chill ' + json.current_observation.windchill_f + 'º';
			$.humidity.text = "Humidity " + json.current_observation.relative_humidity;
			$.skys.text = json.current_observation.weather;
			$.weatherIcon.image = json.current_observation.icon_url;
			wear(json.current_observation);
			colorChange(json.current_observation);
		} catch(e) {
			Ti.API.info(e);
		}

	};

	//executes send for data
	apiCall.send();

};
//grabbing the current location
var geoLocation = function(){
if (Ti.Geolocation.locationServicesEnabled) {
    Titanium.Geolocation.purpose = 'Get Current Location';
    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) {
            Ti.API.error('Error: ' + e.error);
        } else {
            Ti.API.info(e.coords);
            getWeather(e.coords);
            Ti.API.info('lat'+e.coords.latitude);
            Ti.API.info('long'+e.coords.longitude);
        }
    });
} else {
    alert('Please enable location services');
}
};

//this is the wear function that takes the current temp and spits out what to wear

var wear = function(data) {
	if (data.temp_f > 16 && data.temp_f < 34.9) {
		$.toWear.text = "Wear a winter jacket and pants plus socks, winter hat. Heavy gloves";
	} 
	else if (data.temp_f > -15 && data.temp_f < 15.9) {
		$.toWear.text = "Heavy winter jacket, sweatshirt underneath, wool socks, heavy gloves, and heavy winter hat.";
	}
	else if ( data.temp_f > 41.01 && data.temp_f < 51.9) {
		$.toWear.text = "Light jacket and pants. Long-sleeved shirt undernieth if you'll be outside for awhile ";
	} 
	else if ( data.temp_f > 52.01 && data.temp_f < 60.9) {
		$.toWear.text = "Sweatshirt or fleece and pants. Longsleeve shirt if you're feeling brave";

	} 
	else if ( data.temp_f > 35. && data.temp_f < 40.999) {
		$.toWear.text = "Medium weight jacket and pants. Maybe a light knit hat and lighter gloves";
	} 
	else if (data.temp_f > 61 && data.temp_f < 74.9) {
		$.toWear.text = "T-shirt and jeans. If you're staying out past sundown, probably bring a sweater";
	} 
	else if (data.temp_f > 75 && data.temp_f < 89.9) {
		$.toWear.text = "Shorts and T-shirt. Sandals if you're not working";
	}
	else if (data.temp_f > 90 && data.temp_f < 110) {
		$.toWear.text = "Light shirt in both material and color, light shorts, and probably sunscreen";
	}
	else {
		$.toWear.text = "Stay indoors as often as possible";
	}
};

$.Warm.addEventListener('click',function(data){
		if (data.temp_f > 16 && data.temp_f < 34.9) {
		$.toWear.text = "Wear a winter jacket and pants plus socks, winter hat. Heavy gloves";
	} 
	else if (data.temp_f > -15 && data.temp_f < 15.9) {
		$.toWear.text = "Heavy winter jacket, sweatshirt underneath, wool socks, heavy gloves, and heavy winter hat.";
	}
	else if ( data.temp_f > 41.01 && data.temp_f < 51.9) {
		$.toWear.text = "blah ";
	} 
	else if ( data.temp_f > 52.01 && data.temp_f < 60.9) {
		$.toWear.text = "Sweatshirt or fleece and pants. Longsleeve shirt if you're feeling brave";

	} 
	else if ( data.temp_f > 35. && data.temp_f < 40.999) {
		$.toWear.text = "Medium weight jacket and pants. Maybe a light knit hat and lighter gloves";
	} 
	else if (data.temp_f > 61 && data.temp_f < 74.9) {
		$.toWear.text = "T-shirt and jeans. If you're staying out past sundown, probably bring a sweater";
	} 
	else if (data.temp_f > 75 && data.temp_f < 89.9) {
		$.toWear.text = "Shorts and T-shirt. Sandals if you're not working";
	}
	else if (data.temp_f > 90 && data.temp_f < 110) {
		$.toWear.text = "Light shirt in both material and color, light shorts, and probably sunscreen";
	}
	else {
		$.toWear.text = "Stay indoors as often as possible";
	}

});


/*var colorChange = function(data){
	if(data.weather = 'Overcast')
	{
		$.Weather.backgroundColor ='#9FEE00';
	}
	else if (data.weather = 'Rain')
	{
		$.Weather.backgroundColor ="#2D3C82";
	}
	else if (data.weather = 'Sunny')
	{
		$.Weather.backgroundColor ='#FFC600';
	}
	else if (data.weather = 'Clear')
	{
		$.Weather.backgroundColor ='#FFC600';
	}
	else if (data.weather = 'Snow')
	{
		$.Weather.backgroundColor ='#FFFFFF';
	}
	else if (data.weather = 'Mostly Cloudy')
	{
		$.Weather.backgroundColor = '#78E700';
	}
	else if (data.weather = 'Partly Cloudy')
	{
		$.Weather.backgroundColor ='#FFC600';
	}
	else if (data.weather = 'Fog')
	{
		$.Weather.backgroundColor = "#64AAD0";
	}
};
*/
init();
