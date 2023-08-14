"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricket = new CricketCoach_1.CricketCoach();
let myGolf = new GolfCoach_1.GolfCoach();
let theCoaches = [];
theCoaches.push(myCricket);
theCoaches.push(myGolf);
for (let myCoach of theCoaches) {
    console.log(myCoach.getDailyWorkOut());
    console.log();
}
