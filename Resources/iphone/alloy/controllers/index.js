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
    $.__views.label1 = Ti.UI.createLabel({
        id: "label1",
        color: "#900",
        text: "This is the weather section",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "5%",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        zIndex: "1"
    });
    $.__views.index.add($.__views.label1);
    $.__views.Weather = Ti.UI.createView({
        id: "Weather",
        backgroundColor: "#FF3333",
        width: "100%",
        height: "50%",
        top: "0%"
    });
    $.__views.index.add($.__views.Weather);
    $.__views.myTable = Ti.UI.createTableView({
        id: "myTable",
        backgroundColor: "#FF1111",
        top: "18%",
        zIndex: "2"
    });
    $.__views.Weather.add($.__views.myTable);
    $.__views.Clothing = Ti.UI.createView({
        id: "Clothing",
        backgroundColor: "#0066FF",
        width: "100%",
        height: "50%",
        top: "50%"
    });
    $.__views.index.add($.__views.Clothing);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "What should I wear?",
        top: "25%",
        width: "50%",
        height: "50",
        color: "0011FF",
        backgroundColor: "1100FF"
    });
    $.__views.Clothing.add($.__views.button);
    doClick ? $.__views.button.addEventListener("click", doClick) : __defers["$.__views.button!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("args" + args);
    Ti.API.info("Inspecting Object:" + args);
    for (var thing in args) Ti.API.info("args." + thing + "=" + args[things]);
    var location = Titanium.Geolocation.ACCURACY_LOW;
    alert(location);
    $.index.open();
    __defers["$.__views.button!click!doClick"] && $.__views.button.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;