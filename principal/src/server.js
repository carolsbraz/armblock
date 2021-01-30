const http = require("http")
const express = require("express")
const server = express()


//definindo a template engine ejs
server.set('view engine', 'ejs')

//configurar pastas públicas
server.use(express.static("public"))


// configurar caminhos da aplicação

server.get("/", (req, res) => {
    return res.render(__dirname + "/views/index")
})

server.get("/home-trail", (req, res) => {
    res.sendFile(__dirname + "/views/home-trail.html")
})

server.get("/trail-summary", (req, res) => {
    res.sendFile(__dirname + "/views/trail-summary.html")
})

server.get("/trail-content-1", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-1.html")
})

server.get("/trail-content-2", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-2.html")
})

server.get("/manual-programming", (req, res) => {
    var avaiableSerialPorts = []

    const SerialPort = require('serialport');
    SerialPort.list().then(ports => {
        ports.forEach(function(port) {
            avaiableSerialPorts.push(port.path);

        });
        return res.render(__dirname + "/views/manual-programming", { portas: avaiableSerialPorts })
    });

})

const five = require("johnny-five");

server.get("/enviar-dados", (req, res) => {

    const pino5 = req.query.pino5;
    const key51 = req.query.keymotor51.charCodeAt(0);
    const key52 = req.query.keymotor52.charCodeAt(0);

    const pino6 = req.query.pino6;
    const key61 = req.query.keymotor61.charCodeAt(0);
    const key62 = req.query.keymotor62.charCodeAt(0);

    const serialport = req.query.serialport;

    const board = new five.Board({ port: serialport });

    board.on("ready", () => {
        console.log(pino5)
        var servo5 = new five.Servo({
            pin: pino5,
            startAt: 11
        });

        var servo6 = new five.Servo({
            pin: pino6,
            range: [50, 110],
            startAt: 110
        });

        const iohook = require("iohook");

        iohook.on("keypress", event => {

            if (event.keychar == key51) {
                console.log('punhoTransversal-011')
                servo5.to(11)
            }
            if (event.keychar == key52) {
                console.log('punhoTransversal-107')
                servo5.to(107);
            }
            if (event.keychar == key61) {
                console.log('garra aberta-50')
                servo6.min()
            }
            if (event.keychar == key62) {
                console.log('garra fechada-110')
                servo6.max();
            }
            if (event.keychar == 32) {
                servo5.stop();
            }

        });
        iohook.start();
    })
})


//ligar o servidor
http.createServer(server).listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));