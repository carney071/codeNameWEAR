/*var apiCall = Ti.Network.createHTTPClient();
apiCall.onload = function(){
	
};
apiCall.open("GET","http://api.wunderground.com/api/0686a531a29abea6/conditions/q/CA/San_Francisco.json");

apiCall.onload = function(){
	try{
	var rows = searchResultsToRows(this.responseText);
	$.wdata.setData(rows,{
		
	});
	}catch(e){
		Ti.API.info(e);
	
	}
};
apiCall.send();

searchResultsToRows = function(responseText){
	var data=[],
	json = JSON.parse(responseText),
	jsonlenth = json.length;
	//for (var i = 0; i >5; i++)
	for(var key in json){
		if(json.hasOwnProperty(key)){
			var item = json[key];
			data.push(Alloy.createController('index',
			{
				//name: item.title,
				//running: item.ISRUNNING,
				//everthing: item
				
			}).getview($.index.xml));
			}
		}
		

*/






/*
var win = Titanium.UI.currentWindow;
function loadWeather(){
	var weatherData=[];
	var loader = Titanium.Network.createHTTPClient();
	loader.open("GET","http://api.wunderground.com/api/0686a531a29abea6/conditions/q/CA/San_Francisco.json");
	
	loader.onload = function(){
		
		alert(loader);
		
		//var weather = eval();
	};
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