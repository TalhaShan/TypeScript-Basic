"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Shape_1 = require("./Shape");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(10, 15, 20);
var myRec = new Rectangle_1.Rectangle(5, 10, 15, 20);
var theShape = [];
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRec);
for (var _i = 0, theShape_1 = theShape; _i < theShape_1.length; _i++) {
    var tempShape = theShape_1[_i];
    console.log(tempShape.getInfo());
}
