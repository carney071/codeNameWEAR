function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        title: "Main",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.Weather = Ti.UI.createView({
        backgroundColor: "#FF1111",
        width: "100%",
        height: "100%",
        top: "0%",
        id: "Weather"
    });
    $.__views.index.add($.__views.Weather);
    $.__views.label1 = Ti.UI.createLabel({
        backgroundColor: "#FFFFFF",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "6%",
        width: "75%",
        height: "52%",
        zIndex: "0",
        id: "label1"
    });
    $.__views.Weather.add($.__views.label1);
    $.__views.city = Ti.UI.createLabel({
        color: "#900",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "18%",
        width: "100%",
        height: "Ti.UI.SIZE",
        zIndex: "3",
        id: "city"
    });
    $.__views.Weather.add($.__views.city);
    $.__views.skys = Ti.UI.createLabel({
        color: "#FFFFFF",
        backgroundColor: "#900",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "62%",
        width: "45%",
        height: "8%",
        zIndex: "4",
        left: "10",
        id: "skys"
    });
    $.__views.Weather.add($.__views.skys);
    $.__views.weatherIcon = Ti.UI.createImageView({
        width: "18%",
        top: "7%",
        backgroundColor: "#FFFFFF",
        height: "10%",
        id: "weatherIcon"
    });
    $.__views.Weather.add($.__views.weatherIcon);
    $.__views.temp = Ti.UI.createLabel({
        color: "#900",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "25%",
        width: "45%",
        height: "8%",
        zIndex: "4",
        font: {
            fontSize: 50
        },
        id: "temp"
    });
    $.__views.Weather.add($.__views.temp);
    $.__views.feelsLike = Ti.UI.createLabel({
        color: "#FFFFFF",
        backgroundColor: "#900",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "62%",
        width: "45%",
        height: "8%",
        zIndex: "4",
        right: "10",
        id: "feelsLike"
    });
    $.__views.Weather.add($.__views.feelsLike);
    $.__views.humidity = Ti.UI.createLabel({
        color: "#FFFFFF",
        backgroundColor: "#900",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "74%",
        width: "45%",
        height: "8%",
        zIndex: "4",
        left: "10",
        id: "humidity"
    });
    $.__views.Weather.add($.__views.humidity);
    $.__views.windMPH = Ti.UI.createLabel({
        color: "#FFFFFF",
        backgroundColor: "#900",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "86%",
        width: "45%",
        height: "8%",
        zIndex: "4",
        right: "10",
        id: "windMPH"
    });
    $.__views.Weather.add($.__views.windMPH);
    $.__views.windDir = Ti.UI.createLabel({
        color: "#FFFFFF",
        backgroundColor: "#900",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "86%",
        width: "45%",
        height: "8%",
        zIndex: "4",
        left: "10",
        id: "windDir"
    });
    $.__views.Weather.add($.__views.windDir);
    $.__views.windChill = Ti.UI.createLabel({
        color: "#FFFFFF",
        backgroundColor: "#900",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "74%",
        width: "45%",
        height: "8%",
        zIndex: "4",
        right: "10",
        id: "windChill"
    });
    $.__views.Weather.add($.__views.windChill);
    $.__views.label2 = Ti.UI.createLabel({
        color: "#0066FF",
        backgroundColor: "#FFFFFF",
        text: "What you should wear:",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "38%",
        width: "70%",
        font: {
            fontSize: 20
        },
        height: "Ti.UI.SIZE",
        zIndex: "2",
        id: "label2"
    });
    $.__views.Weather.add($.__views.label2);
    $.__views.toWear = Ti.UI.createLabel({
        color: "#0066FF",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "45%",
        width: "65%",
        zIndex: "4",
        id: "toWear"
    });
    $.__views.Weather.add($.__views.toWear);
    $.__views.refresh = Ti.UI.createButton({
        top: "20%",
        width: "50%",
        height: "30",
        color: "#FFFFFF",
        borderRadius: "2",
        id: "refresh",
        title: "Refresh"
    });
    $.__views.Weather.add($.__views.refresh);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var init = function() {
        geoLocation();
        $.index.open();
    };
    $.refresh.addEventListener("click", function() {
        geoLocation();
    });
    var getWeather = function(coords) {
        arguments[0] || {};
        var apiCall = Ti.Network.createHTTPClient();
        apiCall.open("GET", "http://api.wunderground.com/api/0686a531a29abea6/conditions/q/" + coords.latitude + "," + coords.longitude + ".json");
        apiCall.onload = function() {
            try {
                var json = JSON.parse(this.responseText);
                Ti.API.info("Full Location" + json.current_observation.display_location.full);
                Ti.API.info("temp_f= " + json.current_observation.temp_f);
                Ti.API.info("weather=" + json.current_observation.weather);
                Ti.API.info("Feels Like=" + json.current_observation.feelslike_f);
                Ti.API.info("icon" + json.current_observation.icon_url);
                Ti.API.info("humidity =" + json.current_observation.relative_humidity);
                Ti.API.info("Wind direction =" + json.current_observation.wind_dir);
                Ti.API.info("humidity =" + json.current_observation.wind_mph);
                Ti.API.info("humidity =" + json.current_observation.windchill_f);
                $.city.text = json.current_observation.display_location.full;
                $.temp.text = json.current_observation.temp_f + "º";
                $.feelsLike.text = "Feels Like = " + json.current_observation.feelslike_f + "º";
                $.windMPH.text = json.current_observation.wind_mph + "mph";
                $.windDir.text = json.current_observation.wind_dir;
                $.windChill.text = "Wind Chill = " + json.current_observation.windchill_f + "º";
                $.humidity.text = "Humidity = " + json.current_observation.relative_humidity;
                $.skys.text = json.current_observation.weather;
                $.weatherIcon.image = json.current_observation.icon_url;
                wear(json.current_observation);
                colorChange(json.current_observation);
            } catch (e) {
                Ti.API.info(e);
            }
        };
        apiCall.send();
    };
    var geoLocation = function() {
        if (Ti.Geolocation.locationServicesEnabled) {
            Titanium.Geolocation.purpose = "Get Current Location";
            Titanium.Geolocation.getCurrentPosition(function(e) {
                if (e.error) Ti.API.error("Error: " + e.error); else {
                    Ti.API.info(e.coords);
                    getWeather(e.coords);
                    Ti.API.info("lat" + e.coords.latitude);
                    Ti.API.info("long" + e.coords.longitude);
                }
            });
        } else alert("Please enable location services");
    };
    var wear = function(data) {
        $.toWear.text = data.feelslike_f > 16 && 34.9 > data.feelslike_f ? "Wear a winter jacket and pants plus socks, light hat." : data.feelslike_f > 15.9 && -15 > data.feelslike_f ? "Heavy winter jacket, sweatshirt or fleece underneath jacket, wool socks, heavy gloves, and heavy winter hat. Maybe a heavy scarf if that's your style." : data.feelslike_f > 35 && 49.9 > data.feelslike_f ? "Light jacket and pants" : data.feelslike_f > 50 && 60.9 > data.feelslike_f ? "Sweatshirt and pants. Longsleeve shirt if you're feeling brave" : data.feelslike_f > 61 && 74.9 > data.feelslike_f ? "T-shirt and jeans. If you're staying out past sundown, probably bring a sweater" : data.feelslike_f > 75 && 89.9 > data.feelslike_f ? "Shorts and T-shirt" : data.feelslike_f > 90 && 110 > data.feelslike_f ? "Light shirt in both material and color, light shorts, and probably sunscreen" : "Stay indoors as often as possible";
    };
    var colorChange = function(data) {
        (data.weather = "Overcast") ? $.Weather.backgroundColor = "#9FEE00" : (data.weather = "Rain") ? $.Weather.backgroundColor = "#2D3C82" : (data.weather = "Sunny") ? $.Weather.backgroundColor = "#FFC600" : (data.weather = "Snow") ? $.Weather.backgroundColor = "#FFFFFF" : (data.weather = "Mostly Cloudy") ? $.Weather.backgroundColor = "#78E700" : (data.weather = "Partly Cloudy") ? $.Weather.backgroundColor = "#C6F500" : (data.weather = "Fog") && ($.Weather.backgroundColor = "#64AAD0");
    };
    init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;