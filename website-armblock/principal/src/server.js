 const express = require("express")
 const server = express()

 //configurar pasta pública
 server.use(express.static("public"))

 // configurar camninhos da aplicação

 //página inicial

 // req : requisição (pedido)
 //res: resposta

 server.get("/", (req, res) => {
     res.sendFile(__dirname + "/views/index.html")
 })

 server.get("/outrapagina", (req, res) => {
     res.sendFile(__dirname + "/views/outrapagina.html")
 })

 //ligar o servidor
 server.listen(3000)