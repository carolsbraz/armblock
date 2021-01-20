const express = require('express')
const app = express()

var five = require("johnny-five");
var board = new five.Board();



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

board.on("ready", function() {
    app.get('/valores', (req, res) => {

        let pino = req.query.pino;
        let graus = req.query.graus;

        new five.Servo(pino);

        servo1.to(graus);

        res.sendFile(__dirname + '/index.html')
    });
});

app.listen('3000');