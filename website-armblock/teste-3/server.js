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
            startAt: 90,
            range: [50, 110]
        });
        var servo2 = new five.Servo({
            pin: pino2,
            startAt: 90,
            range: [35, 250]
        });
        var servo3 = new five.Servo({
            pin: pino3,
        });
        var servo4 = new five.Servo({
            pin: pino4,
        });



        if (iohook === 'tecla tal 1') {
            servo1.min();
        }
        if (iohook === 'tecla tal la 1') {
            ervo1.max();
        }

        var graus2so = grauInicial2;
        var graus2su = grauInicial2;

        if (iohook === 'tecla tal 2') {
            for (graus2so = graus2su; graus2so < 180; graus2so++) {
                servo2.to(graus2so, 500);
            }
        }
        if (iohook === 'tecla tal la 2') {
            for (graus2su = graus2so; graus2su > 0; graus2su--) {
                servo2.to(graus2su, 500);
            }
        }

        servo3.to(graus3, 5000);
        servo4.to(graus4, 5000);

        console.log(pino1, pino2, pino3, pino4, graus1, graus2, graus3, graus4)

        res.sendFile(__dirname + '/index.html')
    });
});

app.listen('3000');