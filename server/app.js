/**
 * Created by frederik on 1/29/2017.
 */
"use strict";

/*******************************************************************************

 Server setup

*******************************************************************************/
var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static("../client"));
var server = http.Server(app);
var io = require('socket.io')(server);
var port = process.env.port || 2000;

var SOCKET_LIST = {};

app.get('/', function (req, res) {
    fs.readFile('../client/index.html', function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.emit('news', { hello: 'world' });

    socket.on('happy', function (data) {
        console.log("happy because " + data.reason);
    });
    updateModel();
});

server.listen(port, function (_) {
    console.log('listening on *: ' + port);
});




/*******************************************************************************

 Server content

 *******************************************************************************/
var g = require("./model/Game");

const game = new g.Game(3, 3);

function updateModel() {
    for (var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        socket.on('elementClicked', function (data) {
            console.log("element clicked at: " + data.elementPosition);
            game.turn(data.playerNumber, data.elementPosition);
            sendState(data.playerNumber, data.elementPosition);
        });
    }
}
function sendState(playerNumber, elementPosition) {
    for (var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        console.log("sending value: " + game.getField(elementPosition).value);
        socket.emit('modelUpdated', {
            gameOver: game.gameOver,
            elementPosition: elementPosition,
            elementType: game.getField(elementPosition).value,
            playerNumber: playerNumber
        });
    }
}




