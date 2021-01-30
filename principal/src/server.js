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
     const pino1 = req.query.pino1;
     const pino2 = req.query.pino2;
     const key11 = req.query.keymotor11.charCodeAt(0);
     const key12 = req.query.keymotor12.charCodeAt(0);

     const pino6 = req.query.pino6;
     const key61 = req.query.keymotor61.charCodeAt(0);
     const key62 = req.query.keymotor62.charCodeAt(0);

     console.log(pino1, pino2)
     console.log(key11, key12)

     const serialport = req.query.serialport;

     const board = new five.Board({ port: serialport });

     board.on("ready", () => {
         var led1 = new five.Led(pino1)
         var led2 = new five.Led(pino2)

         var servo6 = new five.Servo({
             pin: pino6,
             range: [50, 110],
             startAt: 110
         });

         const iohook = require("iohook");

         var keycodeLed = 0

         iohook.on("keypress", event => {

             console.log(event)

             keycodeLed = event.rawcode

             if (event.keychar == key11) {
                 led2.on();
             }
             if (event.keychar == key12) {
                 led1.on()
             }

         });
         iohook.on("keyup", event => {
             console.log(keycodeLed)

             if (event.rawcode == keycodeLed) {
                 console.log('oi')
                 led2.off();
             }
             if (event.rawcode == keycodeLed) {
                 led1.off()
             }

         });

         iohook.start();
     })
 })


 //ligar o servidor
 http.createServer(server).listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));