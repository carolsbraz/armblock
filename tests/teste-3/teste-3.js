const { Board, Servo } = require("johnny-five");
const keypress = require("keypress");

keypress(process.stdin);

const board = new Board({ port: "COM6" });

board.on("ready", () => {

    var servo1 = new Servo.Continuous({
        pin: 8, //pino do motor
        startAT: 90
    });

    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    process.stdin.setRawMode(true);

    process.stdin.on("keypress", (ch, key) => {

        if (!key) {
            return;
        }
        if (key.name === "z") {
            console.log("Quitting");
            process.exit();
        } else if (key.name === "q") {
            console.log("junta 1 0°");
            servo1.to(0);
        } else if (key.name === "w") {
            console.log("junta 1 90°");
            servo1.to(90);
        } else if (key.name === "e") {
            console.log("junta 1 180°");
            servo1.to(180);

        } else if (key.name === "space") {
            console.log("Stopping");
            servo1.stop();

        }

    });
});