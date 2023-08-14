import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";


let myCircle = new Circle(10,15,20);
let myRec = new Rectangle(5,10,15,20);


let theShape: Shape[] = [];

theShape.push(myCircle);
theShape.push(myRec);

for(let tempShape of theShape){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}

