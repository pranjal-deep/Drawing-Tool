

var express = require('express');
var app = express();


const port = process.env.PORT || 3000;
var server = app.listen(port);

console.log(`Server is running at ${port}`);

app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('New connection: '+socket.id);

    socket.on('mouse', function(data){
        socket.broadcast.emit('mouse',data);
        console.log(data);
    })
}