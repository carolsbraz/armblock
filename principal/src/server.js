 const http = require("http")
 const express = require("express")
 const server = express()

 //configurar pastas públicas
 server.use(express.static("public"))

 // configurar camninhos da aplicação

 //página inicial

 // req : requisição (pedido)
 //res: resposta

 server.get("/", (req, res) => {
     res.sendFile(__dirname + "/views/index.html")
 })

 server.get("/home-trail", (req, res) => {
     res.sendFile(__dirname + "/views/home-trail.html")
 })

 server.get("/trail-summary", (req, res) => {
     res.sendFile(__dirname + "/views/trail-summary.html")
 })

 server.get("/trail-content", (req, res) => {
     res.sendFile(__dirname + "/views/trail-content.html")
 })

 server.get("/manual-programming", (req, res) => {
     res.sendFile(__dirname + "/views/manual-programming.html")
 })

 //ligar o servidor
 http.createServer(server).listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));