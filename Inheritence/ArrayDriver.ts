import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10,15);
let myCircle = new Circle(10,15,20);
let myRec = new Rectangle(5,10,15,20);


let theShape: Shape[] = [];

theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRec);

for(let tempShape of theShape){
    console.log(tempShape.getInfo());
}

