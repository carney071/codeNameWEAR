var win = Titanium.UI.currentWindow;
function loadWeather(){
	var weatherData=[];
	var loader = Titanium.Network.createHTTPClient();
	loader.open("GET","http://api.wunderground.com/api/0686a531a29abea6/conditions/q/CA/San_Francisco.json");
	loader.onload = function(){
		var weather = eval();
	};
	loader.send();
};




/*
var APP = require("core");

var CONFIG = arguments[0];


var apiCall = Ti.Network.createHTTPClient();
xhr.onload = function() {
  var json = JSON.parse(this.responseText);
  for (var i = 0; i < json.data.children.length; i++){
  	
  	//Ti.API.info("Title: " = json.data.children[i].data.title);
  	
  }
};
apiCall.open('GET', 'http://api.wunderground.com/api/key/geolookup/q/94107.json');
apiCall.send();*/