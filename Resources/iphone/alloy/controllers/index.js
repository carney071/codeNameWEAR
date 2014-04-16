function Controller() {
    function doClick() {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
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
    $.__views.myTable = Ti.UI.createTableView({
        id: "myTable",
        backgroundColor: "#990000",
        top: "14%",
        zIndex: "1",
        width: "90%",
        height: "80%"
    });
    $.__views.Weather.add($.__views.myTable);
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
    doClick ? $.__views.button.addEventListener("click", doClick) : __defers["$.__views.button!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
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
    Ti.API.info("args" + args);
    Ti.API.info("Inspecting Object:" + args);
    for (var thing in args) Ti.API.info("args." + thing + "=" + args[things]);
    $.index.open();
    __defers["$.__views.button!click!doClick"] && $.__views.button.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;