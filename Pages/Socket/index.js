import express from 'express';

const app = express()
const port = 3000

app.use(express.static(`www`));

import {Server} from 'socket.io';

const io = new Server(3133, {
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXxjKCxsIqhoV752fwa3j9xwN03jbGBbg",
  authDomain: "csc-webapps.firebaseapp.com",
  projectId: "csc-webapps",
  storageBucket: "csc-webapps.appspot.com",
  messagingSenderId: "270172829331",
  appId: "1:270172829331:web:4e862df424cf1fe190ff66",
  measurementId: "G-32K647R052"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const fbase = initializeApp(firebaseConfig);

const db = fbase.firestore();
var ref = db.ref("/user_data");  //Set the current directory you are working in

/**
* Setting Data Object Value
*/
ref.set([
{
    id:20,
    name:"Jane Doe",
    email:"jane@doe.com",
    website:"https://jane.foo.bar"
}]);