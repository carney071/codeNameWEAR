///////////////

var args = arguments[0] || {};

Ti.API.info('args'+ args);

Ti.API.info('Inspecting Object:' + args);
for( var thing in args){
	Ti.API.info("args."+ thing + '=' + args[things]);
}


//var location = Titanium.Geolocation.ACCURACY_LOW;
//	alert(location);
	



function doClick(e) {
    alert($.label.text);
}

var init = function() {
/*
	var myArray = [];


	for (var i = 0; i < 5; i++) {
		var row = Ti.UI.createTableViewRow({
			title: "row" + i,
			backgroundColor: randomColor()

		});

		myArray.push(row);
	}
	$.myTable.setData(myArray);
*/
	};



/*
var url= "http://www.weather.com";
var client = Ti.Network.HTTPClient({
	onload : function(e){
		Ti.API.info();
		alert('success');
	},
	onerror : function(e){
		Ti.API.debug(e.error);
		alert('There has been an error');
	},
	timeout : 5000 //in Milliseconds
});

*/





/*$.Clothing.addEventListener("click", function(){
	tabsBackgroundColor = "#00990";
	
});*/


$.index.open();
