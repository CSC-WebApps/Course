const express = require('express');
const cookieParser = require('cookie-parser');

const app = express()
const port = 3000

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

var sessions = {};

app.get('/',(req,res) => {

  let cookie = req.cookies['connect.sid'];
  console.log( `cookie: ${cookie}`);
  if( cookie ) {  
    res.sendFile(`${__dirname}/www/home.html`);
  } else { res.sendFile(`${__dirname}/www/index.html`); }
});

app.post('/login',(req,res) => {

  // let secret = Math.random().toString(36).substring(2);
  // res.cookie('connect.sid', secret );
  res.redirect('/CSC-WebApps/Course/Pages/Login/Login.md/port/3000/');

});

app.post('/stash',(req,res) => {
  let cookie = req.cookies['connect.sid'];
  if( cookie ) {
    sessions[cookie] = req.body.secret;
  }
  res.redirect('/CSC-WebApps/Course/Pages/Login/Login.md/port/3000/');
});

app.get('/secret',(req,res) => {

  let cookie = req.cookies['connect.sid'];
  if( cookie ) {
    res.send( sessions[cookie] )
  } else {
    res.send("Unauthorized access");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})