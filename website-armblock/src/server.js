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
    res.render(__dirname + "/views/cadastro-login", { senha: false })
})

server.get("/quem-somos", (req, res) => {
    res.sendFile(__dirname + "/views/quem-somos.html")
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
    var user = firebase.auth().currentUser;
    if (user) {
        let int1, int2, int3, int4, int5, int6, int7
        firebase.database().ref("usuarios/" + user.uid + "/interacao").once('value', function(snapshot) {
            int1 = snapshot.val().int1
            int2 = snapshot.val().int2
            int3 = snapshot.val().int3
            int4 = snapshot.val().int4
            int5 = snapshot.val().int5
            int6 = snapshot.val().int6
            int7 = snapshot.val().int7
            int8 = snapshot.val().int8
            res.render(__dirname + "/views/operational-programming", { int1: int1, int2: int2, int3: int3, int4: int4, int5: int5, int6: int6, int7: int7 })
        });
    } else {
        res.render(__dirname + "/views/cadastro-login", { senha: false })
    }
})

server.get("/block-programming", (req, res) => {
    var user = firebase.auth().currentUser;
    if (user) {
        let configuracoes
        let commands
        let mov
        firebase.database().ref("usuarios/" + user.uid).once('value', function(snapshot) {

            if (snapshot.val() != null) {
                configuracoes = snapshot.val().configuracoes
                commands = snapshot.val().comandos
                port = snapshot.val().porta
                mov = snapshot.val().movimentos
            } else {
                firebase.database().ref(`usuarios/` + user.uid).set({
                    porta: 'COM1',
                    configuracoes: 'conf&&&&&&&',
                    comandos: 'prog&0&',
                    movimentos: 'mov&1&&&'
                })
                configuracoes = 'conf&&&&&&&'
                commands = 'prog&0&'
                port = 'COM1'
                mov = "mov&1&&&"

            }
            var arrayConf = configuracoes.split('&');
            arrayConf.shift();
            console.log(arrayConf.length)
            var arrayComman = commands.split('&');
            arrayComman.shift();
            arrayComman.shift();

            var arrayMov = mov.split('&')
            arrayMov.shift();
            arrayMov.shift();
            console.log(arrayMov)
            console.log(port)
            res.render(__dirname + "/views/block-programming", { enviado: false, conf: arrayConf, comman: arrayComman, com: port, logado: true, user: user.email, mov: arrayMov })
        });
        //remove o conf da string de configuracoes e retorna o array de portas
    } else {
        let conf = "conf&&&&&&&"
        var arrayConf = conf.split('&');
        arrayConf.shift();
        mov = "mov&1&&&"
        var arrayMov = mov.split('&')
        arrayMov.shift();
        arrayMov.shift();
        res.render(__dirname + "/views/block-programming", { enviado: false, conf: arrayConf, comman: "", com: "COM1", logado: false, user: "", mov: arrayMov })
    }
})

server.post("/autenticar-user", (req, res) => {
    const email = req.body.useremail;
    const password = req.body.usersenha;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {

            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    var uid = user.uid;
                    console.log(uid)

                    let configuracoes
                    let commands
                    let mov
                    firebase.database().ref("usuarios/" + user.uid).once('value', function(snapshot) {

                        if (snapshot.val() != null) {
                            configuracoes = snapshot.val().configuracoes
                            commands = snapshot.val().comandos
                            port = snapshot.val().porta
                            mov = snapshot.val().movimentos
                        } else {
                            firebase.database().ref(`usuarios/` + user.uid).set({
                                porta: 'COM1',
                                configuracoes: 'conf&&&&&&&',
                                comandos: 'prog&0&',
                                movimentos: 'mov&1&&&'
                            })
                            configuracoes = 'conf&&&&&&&'
                            commands = 'prog&0&'
                            port = 'COM1'
                            mov = "mov&1&&&"
                            firebase.database().ref(`usuarios/` + user.uid + "/interacao").set({
                                int1: '90',
                                int2: '45',
                                int3: '140',
                                int4: '0',
                                int5: '180',
                                int6: '10',
                                int7: '100'
                            })
                        }
                        var arrayConf = configuracoes.split('&');
                        arrayConf.shift();
                        console.log(arrayConf.length)
                        var arrayComman = commands.split('&');
                        arrayComman.shift();
                        arrayComman.shift();

                        var arrayMov = mov.split('&')
                        arrayMov.shift();
                        arrayMov.shift();

                        console.log(arrayMov)
                        res.render(__dirname + "/views/block-programming", { enviado: false, conf: arrayConf, comman: arrayComman, com: port, logado: true, user: user.email, mov: arrayMov })
                    });

                }
            });


        })
        .catch((error) => {
            if (error.code == 'auth/user-not-found') {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => {
                        firebase.auth().onAuthStateChanged(user => {
                            if (user) {

                                let configuracoes
                                let commands
                                let mov
                                firebase.database().ref("usuarios/" + user.uid).once('value', function(snapshot) {

                                    if (snapshot.val() != null) {
                                        configuracoes = snapshot.val().configuracoes
                                        commands = snapshot.val().comandos
                                        port = snapshot.val().porta
                                        mov = snapshot.val().movimentos
                                    } else {
                                        firebase.database().ref(`usuarios/` + user.uid).set({
                                            porta: 'COM1',
                                            configuracoes: 'conf&&&&&&&',
                                            comandos: 'prog&0&',
                                            movimentos: 'mov&1&&&'
                                        })
                                        configuracoes = 'conf&&&&&&&'
                                        commands = 'prog&0&'
                                        port = 'COM1'
                                        mov = "mov&1&::"
                                        firebase.database().ref(`usuarios/` + user.uid + "/interacao").set({
                                            int1: '90',
                                            int2: '45',
                                            int3: '140',
                                            int4: '0',
                                            int5: '180',
                                            int6: '10',
                                            int7: '100'
                                        })
                                    }
                                    var arrayConf = configuracoes.split('&');
                                    arrayConf.shift();
                                    console.log(arrayConf.length)
                                    var arrayComman = commands.split('&');
                                    arrayComman.shift();
                                    arrayComman.shift();

                                    var arrayMov = mov.split('&')
                                    arrayMov.shift();
                                    arrayMov.shift();

                                    console.log(arrayMov)
                                    res.render(__dirname + "/views/block-programming", { enviado: false, conf: arrayConf, comman: arrayComman, com: port, logado: true, user: user.email, mov: arrayMov })
                                });

                            }
                        });
                    })
                    .catch((error) => {
                        console.log(error.message)
                    });
            } else if (error.code == 'auth/wrong-password') {
                res.render(__dirname + "/views/cadastro-login", { senha: true })
            } else {
                console.log(error.code)
            }

        });
})

server.get("/sair-conta", (req, res) => {
    firebase.auth().signOut().then(() => {
        let conf = "conf&&&&&&&"
        var arrayConf = conf.split('&');
        arrayConf.shift();
        mov = "mov&1&&&"
        var arrayMov = mov.split('&')
        arrayMov.shift();
        arrayMov.shift();
        res.render(__dirname + "/views/block-programming", { enviado: false, conf: arrayConf, comman: "", com: "COM1", logado: false, mov: arrayMov })
    }).catch((error) => {
        console.log(error.code)
    });
})

server.get("/enviar-comandos", (req, res) => {
    const port = req.query.port;
    const conf = req.query.conf;
    const comand = req.query.commands;
    const mov = req.query.mov;

    var user = firebase.auth().currentUser;

    if (user) {
        firebase.database().ref(`usuarios/` + user.uid).update({
            porta: port,
            configuracoes: conf,
            comandos: comand,
            movimentos: mov
        })
        var arrayConf = conf.split('&');
        arrayConf.shift();
        var arrayComman = comand.split('&');
        arrayComman.shift();
        arrayComman.shift();

        var arrayMov = mov.split('&')
        arrayMov.shift();
        arrayMov.shift();


        res.render(__dirname + "/views/block-programming", { enviado: true, conf: arrayConf, comman: arrayComman, com: port, logado: true, user: user.email, mov: arrayMov })
    } else {
        res.render(__dirname + "/views/cadastro-login", { senha: false })
    }


})

server.post("/int-1", (req, res) => {
    const val1 = req.body.valorjunta1;

    var user = firebase.auth().currentUser;

    if (user) {
        firebase.database().ref(`usuarios/` + user.uid + "/interacao").update({
            int1: val1
        })
        let int1, int2, int3, int4, int5, int6, int7
        firebase.database().ref("usuarios/" + user.uid + "/interacao").once('value', function(snapshot) {
            int1 = snapshot.val().int1
            int2 = snapshot.val().int2
            int3 = snapshot.val().int3
            int4 = snapshot.val().int4
            int5 = snapshot.val().int5
            int6 = snapshot.val().int6
            int7 = snapshot.val().int7
            int8 = snapshot.val().int8
            res.render(__dirname + "/views/operational-programming", { int1: int1, int2: int2, int3: int3, int4: int4, int5: int5, int6: int6, int7: int7 })
        });
    } else {
        res.render(__dirname + "/views/cadastro-login", { senha: false })
    }
})

server.post("/int-2", (req, res) => {
    const val2 = req.body.valorjunta2;

    var user = firebase.auth().currentUser;


    if (user) {
        firebase.database().ref(`usuarios/` + user.uid + "/interacao").update({
            int2: val2
        })
        let int1, int2, int3, int4, int5, int6, int7
        firebase.database().ref("usuarios/" + user.uid + "/interacao").once('value', function(snapshot) {
            int1 = snapshot.val().int1
            int2 = snapshot.val().int2
            int3 = snapshot.val().int3
            int4 = snapshot.val().int4
            int5 = snapshot.val().int5
            int6 = snapshot.val().int6
            int7 = snapshot.val().int7
            int8 = snapshot.val().int8
            res.render(__dirname + "/views/operational-programming", { int1: int1, int2: int2, int3: int3, int4: int4, int5: int5, int6: int6, int7: int7 })
        });
    } else {
        res.render(__dirname + "/views/cadastro-login", { senha: false })
    }
})

server.post("/int-3", (req, res) => {
    const val3 = req.body.valorjunta3;

    var user = firebase.auth().currentUser;


    if (user) {
        firebase.database().ref(`usuarios/` + user.uid + "/interacao").update({
            int3: val3
        })
        let int1, int2, int3, int4, int5, int6, int7
        firebase.database().ref("usuarios/" + user.uid + "/interacao").once('value', function(snapshot) {
            int1 = snapshot.val().int1
            int2 = snapshot.val().int2
            int3 = snapshot.val().int3
            int4 = snapshot.val().int4
            int5 = snapshot.val().int5
            int6 = snapshot.val().int6
            int7 = snapshot.val().int7
            int8 = snapshot.val().int8
            res.render(__dirname + "/views/operational-programming", { int1: int1, int2: int2, int3: int3, int4: int4, int5: int5, int6: int6, int7: int7 })
        });
    } else {
        res.render(__dirname + "/views/cadastro-login", { senha: false })
    }
})

server.post("/int-4", (req, res) => {
    const val4 = req.body.valorjunta4;

    var user = firebase.auth().currentUser;

    if (user) {
        firebase.database().ref(`usuarios/` + user.uid + "/interacao").update({
            int4: val4
        })
        let int1, int2, int3, int4, int5, int6, int7
        firebase.database().ref("usuarios/" + user.uid + "/interacao").once('value', function(snapshot) {
            int1 = snapshot.val().int1
            int2 = snapshot.val().int2
            int3 = snapshot.val().int3
            int4 = snapshot.val().int4
            int5 = snapshot.val().int5
            int6 = snapshot.val().int6
            int7 = snapshot.val().int7
            int8 = snapshot.val().int8
            res.render(__dirname + "/views/operational-programming", { int1: int1, int2: int2, int3: int3, int4: int4, int5: int5, int6: int6, int7: int7 })
        });
    } else {
        res.render(__dirname + "/views/cadastro-login", { senha: false })
    }
})

server.post("/int-5", (req, res) => {
    const val5 = req.body.valorjunta5;

    var user = firebase.auth().currentUser;


    if (user) {
        firebase.database().ref(`usuarios/` + user.uid + "/interacao").update({
            int5: val5
        })
        let int1, int2, int3, int4, int5, int6, int7
        firebase.database().ref("usuarios/" + user.uid + "/interacao").once('value', function(snapshot) {
            int1 = snapshot.val().int1
            int2 = snapshot.val().int2
            int3 = snapshot.val().int3
            int4 = snapshot.val().int4
            int5 = snapshot.val().int5
            int6 = snapshot.val().int6
            int7 = snapshot.val().int7
            int8 = snapshot.val().int8
            res.render(__dirname + "/views/operational-programming", { int1: int1, int2: int2, int3: int3, int4: int4, int5: int5, int6: int6, int7: int7 })
        });
    } else {
        res.render(__dirname + "/views/cadastro-login", { senha: false })
    }
})

server.post("/int-6", (req, res) => {
    const val6 = req.body.valorjunta6;

    var user = firebase.auth().currentUser;


    if (user) {
        firebase.database().ref(`usuarios/` + user.uid + "/interacao").update({
            int6: val6
        })
        let int1, int2, int3, int4, int5, int6, int7
        firebase.database().ref("usuarios/" + user.uid + "/interacao").once('value', function(snapshot) {
            int1 = snapshot.val().int1
            int2 = snapshot.val().int2
            int3 = snapshot.val().int3
            int4 = snapshot.val().int4
            int5 = snapshot.val().int5
            int6 = snapshot.val().int6
            int7 = snapshot.val().int7
            int8 = snapshot.val().int8
            res.render(__dirname + "/views/operational-programming", { int1: int1, int2: int2, int3: int3, int4: int4, int5: int5, int6: int6, int7: int7 })
        });
    } else {
        res.render(__dirname + "/views/cadastro-login", { senha: false })
    }
})

server.post("/int-7", (req, res) => {
    const val7 = req.body.valorjunta7;

    var user = firebase.auth().currentUser;

    if (user) {
        firebase.database().ref(`usuarios/` + user.uid + "/interacao").update({
            int7: val7
        })
        let int1, int2, int3, int4, int5, int6, int7
        firebase.database().ref("usuarios/" + user.uid + "/interacao").once('value', function(snapshot) {
            int1 = snapshot.val().int1
            int2 = snapshot.val().int2
            int3 = snapshot.val().int3
            int4 = snapshot.val().int4
            int5 = snapshot.val().int5
            int6 = snapshot.val().int6
            int7 = snapshot.val().int7
            int8 = snapshot.val().int8
            res.render(__dirname + "/views/operational-programming", { int1: int1, int2: int2, int3: int3, int4: int4, int5: int5, int6: int6, int7: int7 })
        });
    } else {
        res.render(__dirname + "/views/cadastro-login", { senha: false })
    }
})

//ligar o servidor
http.createServer(server).listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));