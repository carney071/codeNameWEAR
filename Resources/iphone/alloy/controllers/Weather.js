function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Weather";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Weather = Ti.UI.createView({
        id: "Weather"
    });
    $.__views.Weather && $.addTopLevelView($.__views.Weather);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var apiCall = Ti.Network.createHTTPClient();
    apiCall.open("GET", "http://api.wunderground.com/api/0686a531a29abea6/conditions/q/CA/San_Francisco.json");
    apiCall.onload = function() {
        try {
            var json = JSON.parse(this.responseText);
            Ti.API.info("temp_f =" + json.current_observation.temp_f);
        } catch (e) {
            Ti.API.info(e);
        }
    };
    apiCall.send();
    searchResultsToRows = function(responseText) {
        var data = [], json = JSON.parse(responseText);
        json.length;
        Ti.API.info("json");
        Ti.API.info("jsonlength");
        for (var key in json) if (json.hasOwnProperty(key)) {
            json[key];
            Ti.UI.createTableViewRow({
                title: "row" + i
            });
        }
        return data;
    };
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;