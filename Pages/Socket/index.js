const express = require('express');

const app = express()
const port = 3000

app.use(express.static(`${__dirname}/www`));

const socket = require('socket.io');

const io = socket(3133, {
    transports: ['websocket']
});

io.sockets.on('connection', socket => {

    if( socket.connected )
    {
        //// Broadcast heartbeat event over websockets ever 1 second
        var heartbeatTimer = setInterval( function () 
        {
            socket.emit("heartbeat", 'data');
        }, 1000);

        //// If a client disconnects, we will stop sending events for them.
        socket.on('disconnect', function (reason) {
            console.log(`closing connection ${reason}`);
            clearInterval(heartbeatTimer);
        });
    }

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
