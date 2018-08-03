var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        to: 'Nick',
        text: 'Hey, du yo wanna hangoucha?'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});