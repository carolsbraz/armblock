var firebaseConfig = {
    apiKey: "AIzaSyAj9g1tBf7wICyyOXO3-wdHov4RiDJ5XEk",
    authDomain: "armblock-2faec.firebaseapp.com",
    databaseURL: "https://armblock-2faec-default-rtdb.firebaseio.com",
    projectId: "armblock-2faec",
    storageBucket: "armblock-2faec.appspot.com",
    messagingSenderId: "746158222333",
    appId: "1:746158222333:web:aa5d6d616599f3a1e44794"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

logar = function() {
    var email = document.getElementById('user-email').value
    var senha = document.getElementById('user-senha').value

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((user) => {
            window.location.href = "send-data.html";
        })
        .catch((error) => {
            console.log("aqui")
            console.log(error.message)
        });
    email.value = ''
    senha.value = ''
}

sair = function() {
    firebase.auth().signOut().then(() => {
        console.log('deslogado')
        window.location.href = "index.html";
    }).catch((error) => {
        console.log('não foi possível deslogar')
    });
}

logado = function() {
    var user = firebase.auth().currentUser;

    if (user) {
        console.log(`Usuário logado: ${user.email}`);
    } else {
        console.log('nenhum user logado');
    }
}

let lastPort, lastConf, lastCommands;
let port, conf, commands;

let SerialPort = require('serialport');

var myPort;


configurar = function() {

    var user = firebase.auth().currentUser;
    if (user) {
        firebase.database().ref('/usuarios/' + user.uid).once('value').then((snapshot) => {
            lastPort = port;
            lastConf = conf;

            port = snapshot.val().porta
            conf = snapshot.val().configuracoes

            if (lastPort != port || lastConf != conf) {

                myPort = new SerialPort(port, 9600);
                let Readline = SerialPort.parsers.Readline;
                let parser = new Readline();
                myPort.pipe(parser);

                myPort.on('open', () => {
                    console.log('port open. Data rate: ' + myPort.baudRate);
                    myPort.write(conf)
                    document.getElementById("configura").disabled = true;
                });
                parser.on('data', (data) => { console.log(data) });
                myPort.on('close', function(err) {
                    console.log("Port closed.");
                    window.location.href = "send-data.html";
                });
                myPort.on('error', (error) => { console.log('Serial port error: ' + error) });

            }
        });
    } else {

    }
}

comecar = function() {
    var user = firebase.auth().currentUser;
    if (user) {
        firebase.database().ref("usuarios/" + user.uid).on('value', function(snapshot) {
            lastCommands = commands;

            commands = snapshot.val().comandos

            if (lastCommands != commands) {
                myPort.write(commands)
            }
        });
    } else {

    }
}

parar = function() {
    myPort.close()
}