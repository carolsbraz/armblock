var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

var firebaseConfig = {
    apiKey: "AIzaSyAj9g1tBf7wICyyOXO3-wdHov4RiDJ5XEk",
    authDomain: "armblock-2faec.firebaseapp.com",
    databaseURL: "https://armblock-2faec-default-rtdb.firebaseio.com",
    projectId: "armblock-2faec",
    storageBucket: "armblock-2faec.appspot.com",
    messagingSenderId: "746158222333",
    appId: "1:746158222333:web:9df32bea5c17f121e44794"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

logar = function() {
    var email = document.getElementById('user-email').value
    var senha = document.getElementById('user-senha').value

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((user) => {
            console.log(`Logado: ${user.email}`)
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

let port;
let conf;
let commands;

function buscarDados() {
    var user = firebase.auth().currentUser;
    firebase.database().ref("usuarios/" + user.uid).on('value', function(snapshot) {
        port = snapshot.val().porta
        conf = snapshot.val().configuracoes
        commands = snapshot.val().comandos
    });
}

function começar() {
    console.log(`PORTA: ${port}`)
    let SerialPort = require('serialport');
    var myPort = new SerialPort(port, 9600);
    let Readline = SerialPort.parsers.Readline;
    let parser = new Readline();
    myPort.pipe(parser);

    myPort.on('open', () => { console.log('port open. Data rate: ' + myPort.baudRate) });
    parser.on('data', (data) => { console.log(data) });
    myPort.on('close', () => { console.log('port closed.') });
    myPort.on('error', (error) => { console.log('Serial port error: ' + error) });

    const btnConf = document.getElementById('btn-configuracoes')
    const btnComandos = document.getElementById('btn-comandos')

    btnConf.addEventListener('click', () => {
        myPort.write(conf)
    })

    btnComandos.addEventListener('click', () => {
        myPort.write(commands)
    })

}