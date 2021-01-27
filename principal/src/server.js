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
     // Promise approach
     SerialPort.list().then(ports => {
         ports.forEach(function(port) {
             avaiableSerialPorts.push(port.path);
             return res.render(__dirname + "/views/manual-programming", { portas: avaiableSerialPorts })
         });
     });


 })

 const five = require("johnny-five");
 const iohook = require("iohook");

 server.get("/enviar-dados", (req, res) => {
     const pino1 = req.query.pino1;

     const key11 = req.query.keymotor11.charCodeAt(0);

     const key12 = req.query.keymotor12.charCodeAt(0);

     const serialport = req.query.serialport;

     const board = new five.Board({ port: serialport });

     board.on("ready", () => {

         var led = new five.Led(pino1);

         iohook.on("keypress", event => {

             if (event.keychar == key11) {
                 led.on();
             }
             if (event.keychar == key12) {
                 led.off();
             }
             if (event.keychar == 32) {

                 res.sendFile(__dirname + "/views/manual-programming.html")
                 iohook.stop();
             }

         });
         iohook.start();
     })
 })


 //ligar o servidor
 http.createServer(server).listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));