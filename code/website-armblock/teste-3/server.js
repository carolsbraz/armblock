const express = require('express')
const app = express()

var five = require("johnny-five");
var board = new five.Board({ port: "COM6" });


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

board.on("ready", function() {
    app.get('/valores', (req, res) => {

        let pino1 = req.query.pino1;
        let graus1 = req.query.graus1;
        let pino2 = req.query.pino2;
        let graus2 = req.query.graus2;
        let pino3 = req.query.pino3;
        let graus3 = req.query.graus3;
        let pino4 = req.query.pino4;
        let graus4 = req.query.graus4;

        var servo1 = new five.Servo({
            pin: pino1,
        });
        var servo2 = new five.Servo({
            pin: pino2,
        });
        var servo3 = new five.Servo({
            pin: pino3,
        });
        var servo4 = new five.Servo({
            pin: pino4,
        });

        servo1.to(graus1, 5000);
        servo2.to(graus2, 5000);
        servo3.to(graus3, 5000);
        servo4.to(graus4, 5000);

        console.log(pino1, pino2, pino3, pino4, graus1, graus2, graus3, graus4)

        res.sendFile(__dirname + '/index.html')
    });
});

app.listen('3000');