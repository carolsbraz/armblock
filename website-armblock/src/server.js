const http = require("http")
const express = require("express")
const bodyParser = require('body-parser')
const server = express()

var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/database");

var firebaseConfig = {
    apiKey: "AIzaSyAj9g1tBf7wICyyOXO3-wdHov4RiDJ5XEk",
    authDomain: "armblock-2faec.firebaseapp.com",
    projectId: "armblock-2faec",
    storageBucket: "armblock-2faec.appspot.com",
    messagingSenderId: "746158222333",
    appId: "1:746158222333:web:e8418b733e8e8942e44794"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//configurar pastas públicas
server.use(express.static("public"))
server.set('view engine', 'ejs')
server.use(bodyParser.urlencoded())

// configurar caminhos da aplicação
server.get("/", (req, res) => {

    var user = firebase.auth().currentUser;
    if (user) {
        res.render(__dirname + "/views/index", { logado: true })
    } else {
        res.render(__dirname + "/views/index", { logado: false })
    }
})

server.get("/cadastro-login", (req, res) => {
    res.sendFile(__dirname + "/views/cadastro-login.html")
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

server.get("/trail-content-3", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-3.html")
})

server.get("/trail-content-4", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-4.html")
})

server.get("/trail-content-5", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-5.html")
})
server.get("/trail-content-6", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-6.html")
})
server.get("/trail-content-7", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-7.html")
})
server.get("/trail-content-8", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-8.html")
})
server.get("/trail-content-9", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-9.html")
})
server.get("/trail-content-10", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-10.html")
})
server.get("/trail-content-11", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-11.html")
})
server.get("/trail-content-12", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-12.html")
})
server.get("/trail-content-13", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-13.html")
})
server.get("/trail-content-14", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-14.html")
})
server.get("/trail-content-15", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-15.html")
})
server.get("/trail-content-16", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-16.html")
})
server.get("/trail-content-17", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-17.html")
})
server.get("/trail-content-18", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-18.html")
})
server.get("/trail-content-19", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-19.html")
})
server.get("/trail-content-20", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-20.html")
})
server.get("/trail-content-21", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-21.html")
})
server.get("/trail-content-22", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-22.html")
})
server.get("/trail-content-23", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-23.html")
})
server.get("/trail-content-24", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-24.html")
})
server.get("/trail-content-25", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-25.html")
})
server.get("/trail-content-26", (req, res) => {
    res.sendFile(__dirname + "/views/trail-content-26.html")
})
server.get("/tutorial", (req, res) => {
    res.sendFile(__dirname + "/views/video.html")
})

server.get("/operational-programming", (req, res) => {
    res.sendFile(__dirname + "/views/operational-programming.html")
})

server.get("/block-programming", (req, res) => {
    var user = firebase.auth().currentUser;
    if (user) {
        let configuracoes
        let commands
        firebase.database().ref("usuarios/" + user.uid).once('value', function(snapshot) {
            configuracoes = snapshot.val().configuracoes
            commands = snapshot.val().comandos
            port = snapshot.val().porta

            var arrayConf = configuracoes.split('&');
            arrayConf.shift();

            var arrayComman = commands.split('&');
            arrayComman.shift();
            arrayComman.shift();
            console.log(port)


            res.render(__dirname + "/views/block-programming", { enviado: false, conf: arrayConf, comman: arrayComman, com: port })

        });
        //remove o conf da string de configuracoes e retorna o array de portas


    } else {
        res.sendFile(__dirname + "/views/cadastro-login.html")
    }
})

server.post("/autenticar-user", (req, res) => {
    const email = req.body.useremail;
    const password = req.body.usersenha;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            res.render(__dirname + "/views/index", { logado: true })
        })
        .catch((error) => {
            if (error.code == 'auth/user-not-found') {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => {
                        res.render(__dirname + "/views/index", { logado: true })
                    })
                    .catch((error) => {
                        console.log(error.message)
                    });
            }
        });
})

server.get("/sair-conta", (req, res) => {
    firebase.auth().signOut().then(() => {
        res.render(__dirname + "/views/index", { logado: false })
    }).catch((error) => {
        console.log(error.code)
    });
})

server.get("/enviar-comandos", (req, res) => {
        const port = req.query.port;
        const conf = req.query.conf;
        const comand = req.query.commands;

        var user = firebase.auth().currentUser;

        if (user) {
            firebase.database().ref(`usuarios/` + user.uid).set({
                porta: port,
                configuracoes: conf,
                comandos: comand
            })
            var arrayConf = conf.split('&');
            arrayConf.shift();
            var arrayComman = comand.split('&');
            arrayComman.shift();
            arrayComman.shift();
            res.render(__dirname + "/views/block-programming", { enviado: true, conf: arrayConf, comman: arrayComman, com: port })
        } else {
            res.sendFile(__dirname + "/views/cadastro-login.html")
        }


    })
    //ligar o servidor
http.createServer(server).listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));