import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10,15);

console.log(myShape.getInfo());

let myCircle = new Circle(10,15,20);
console.log(myCircle.getInfo());

let myRec = new Rectangle(5,10,15,20);
console.log(myRec.getInfo());