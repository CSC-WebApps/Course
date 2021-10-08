const express = require('express');

const app = express()
const port = 3000

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

var sessions = {};

app.get('/',(req,res) => {

  res.sendFile('www/index.html');

});

app.post('/login',(req,res) => {

  // let secret = Math.random().toString(36).substring(2);
  // res.cookie('connect.sid', secret );
  res.redirect('CSC-WebApps/Course/Pages/Login/Login.md/env/files/www/index.html');

});

app.post('/stash',(req,res) => {
  let cookie = req.cookies.get('connect.sid');
  if( cookie ) {
    sessions[cookie] = req.body.secret;
  }
});

app.get('/secret',(req,res) => {

  let cookie = req.cookies.get('connect.sid');
  if( cookie ) {
    res.send( sessions[cookie] )
  } else {
    res.send("Unauthorized access");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})