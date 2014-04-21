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
        id: "Weather",
        backgroundColor: "#FF1111",
        width: "100%",
        height: "75%",
        top: "0%"
    });
    $.__views.index.add($.__views.Weather);
    $.__views.label1 = Ti.UI.createLabel({
        id: "label1",
        color: "#900",
        backgroundColor: "#FFFFFF",
        text: "Weather",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "7%",
        width: "100%",
        height: Ti.UI.SIZE,
        zIndex: "3"
    });
    $.__views.Weather.add($.__views.label1);
    $.__views.temp = Ti.UI.createLabel({
        id: "temp",
        color: "#FFFFFF",
        backgroundColor: "#900",
        text: "",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "13%",
        width: "50%",
        height: "10%",
        zIndex: "4"
    });
    $.__views.Weather.add($.__views.temp);
    $.__views.feelsLike = Ti.UI.createLabel({
        id: "feelsLike",
        color: "#FFFFFF",
        backgroundColor: "#900",
        text: "",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "25%",
        width: "50%",
        height: "10%",
        zIndex: "4"
    });
    $.__views.Weather.add($.__views.feelsLike);
    $.__views.skys = Ti.UI.createLabel({
        id: "skys",
        color: "#FFFFFF",
        backgroundColor: "#900",
        text: "",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "37%",
        width: "50%",
        height: "10%",
        zIndex: "4"
    });
    $.__views.Weather.add($.__views.skys);
    $.__views.weatherIcon = Ti.UI.createImageView({
        id: "weatherIcon",
        width: "30%",
        top: "47%"
    });
    $.__views.Weather.add($.__views.weatherIcon);
    $.__views.humidity = Ti.UI.createLabel({
        id: "humidity",
        color: "#FFFFFF",
        backgroundColor: "#900",
        text: "",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "57%",
        width: "50%",
        height: "10%",
        zIndex: "4"
    });
    $.__views.Weather.add($.__views.humidity);
    $.__views.windMPH = Ti.UI.createLabel({
        id: "windMPH",
        color: "#FFFFFF",
        backgroundColor: "#900",
        text: "",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "67%",
        width: "50%",
        height: "10%",
        zIndex: "4"
    });
    $.__views.Weather.add($.__views.windMPH);
    $.__views.windDir = Ti.UI.createLabel({
        id: "windDir",
        color: "#FFFFFF",
        backgroundColor: "#900",
        text: "",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "77%",
        width: "50%",
        height: "10%",
        zIndex: "4"
    });
    $.__views.Weather.add($.__views.windDir);
    $.__views.windChill = Ti.UI.createLabel({
        id: "windChill",
        color: "#FFFFFF",
        backgroundColor: "#900",
        text: "",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "87%",
        width: "50%",
        height: "10%",
        zIndex: "4"
    });
    $.__views.Weather.add($.__views.windChill);
    $.__views.Clothing = Ti.UI.createView({
        id: "Clothing",
        backgroundColor: "#0066FF",
        width: "100%",
        height: "25%",
        top: "75%"
    });
    $.__views.index.add($.__views.Clothing);
    $.__views.label2 = Ti.UI.createLabel({
        id: "label2",
        color: "#0066FF",
        backgroundColor: "#FFFFFF",
        text: "Comfy Clothing",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "5%",
        width: "100%",
        height: Ti.UI.SIZE,
        zIndex: "2"
    });
    $.__views.Clothing.add($.__views.label2);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "What should I wear?",
        top: "40%",
        width: "50%",
        height: "50",
        color: "#0066FF",
        backgroundColor: "1100FF"
    });
    $.__views.Clothing.add($.__views.button);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var init = function() {
        getWeather();
        $.index.open();
    };
    var getWeather = function() {
        arguments[0] || {};
        var apiCall = Ti.Network.createHTTPClient();
        apiCall.open("GET", "http://api.wunderground.com/api/0686a531a29abea6/conditions/q/CA/San_Francisco.json");
        apiCall.onload = function() {
            try {
                var json = JSON.parse(this.responseText);
                Ti.API.info("temp_f= " + json.current_observation.temp_f);
                Ti.API.info("weather=" + json.current_observation.weather);
                Ti.API.info("Feels Like=" + json.current_observation.feelslike_f);
                Ti.API.info("icon" + json.current_observation.icon_url);
                Ti.API.info("humidity =" + json.current_observation.relative_humidity);
                Ti.API.info("Wind direction =" + json.current_observation.wind_dir);
                Ti.API.info("humidity =" + json.current_observation.wind_mph);
                Ti.API.info("humidity =" + json.current_observation.windchill_f);
                $.temp.text = "Temp= " + json.current_observation.temp_f;
                $.feelsLike.text = "Feels Like= " + json.current_observation.feelslike_f;
                $.windMPH.text = "Wind Speed" + json.current_observation.wind_mph;
                $.windDir.text = "Wind Direction=" + json.current_observation.wind_dir;
                $.windChill.text = "Wind Chill" + json.current_observation.windchill_f;
                $.humidity.text = "Humidity= " + json.current_observation.relative_humidity;
                $.skys.text = json.current_observation.weather;
                $.weatherIcon.image = json.current_observation.icon_url;
            } catch (e) {
                Ti.API.info(e);
            }
        };
        apiCall.send();
    };
    init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;