var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')( http );

app.use(express.static('public'));

http.listen(3000, function () {
    console.log('listening on port 3000');
});

var userNumber = 0;

io.sockets.on('connection', function (socket) {

    var addedUser = false;

    socket.on('new message', function (data) {
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        })
    });

    socket.on('add user', function (username) {
        if (addedUser) {
            return;
        }

        socket.username = username;
        ++userNumber;
        addedUser = true;

        socket.emit('login', {
            userNumber: userNumber
        });

        socket.broadcast.emit('user joined', {
            username: socket.username,
            userNumber: userNumber
        });
    });

    socket.on('typing', function () {
        socket.broadcast.emit('typing', {
            username: socket.username
        });
    });

    socket.on('stop typing', function () {
        socket.broadcast.emit('stop typing', {
            username: socket.username
        });
    });

    socket.on('disconnect', function () {
        if (addedUser) {
            --userNumber;

            socket.broadcast.emit('user left', {
                username: socket.username,
                userNumber: userNumber
            });
        }
    });

});