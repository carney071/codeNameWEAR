function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId0 = [];
    $.__views.clothingWindow = Ti.UI.createWindow({
        backgroundColor: "#9A5613",
        id: "clothingWindow"
    });
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.clothingWindow,
        title: "Clothing",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.weatherWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "weatherWindow"
    });
    $.__views.__alloyId2 = Ti.UI.createTab({
        window: $.__views.weatherWindow,
        title: "Weather",
        id: "__alloyId2"
    });
    __alloyId0.push($.__views.__alloyId2);
    $.__views.index = Ti.UI.createTabGroup({
        fontSize: "10px",
        textAlign: "Center",
        tabs: __alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.Clothing.addEventListener("click", function() {
        "#05333E";
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;