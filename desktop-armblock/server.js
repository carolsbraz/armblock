var express = require('express');
var http = require('http');

var appServer = express();

appServer.get('*', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

http.createServer(appServer).listen(3007, function() {
    console.log('Express server listening on port');
});