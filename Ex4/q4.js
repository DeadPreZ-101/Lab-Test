const moment = require("moment");
const event = require("events");

const eventEmitter = new event.EventEmitter();

var callCurrentTime = () => {
    let timeNow = moment().format("h:mm:ss a");
    console.log("Current Time: " + timeNow);
};

eventEmitter.on("currentTime", callCurrentTime);
eventEmitter.emit("currentTime");
