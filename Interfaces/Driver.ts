import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricket = new CricketCoach();
let myGolf = new GolfCoach();

let theCoaches:Coach[] = [];

theCoaches.push(myCricket);
theCoaches.push(myGolf);

for(let myCoach of theCoaches){
    console.log(myCoach.getDailyWorkOut());
    console.log();
}