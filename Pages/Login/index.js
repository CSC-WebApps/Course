const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express()
const port = 3000

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session cookie
app.use(cookieParser());

//session middleware
app.use(sessions({
    secret: "secretsessionkey",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.get('/',(req,res) => {
  let session=req.session;
  if(session.userid){
      res.send("Welcome User <a href=\'/logout'>click to logout</a>");
  }else
  res.redirect('/');
});

app.post('/user',(req,res) => {

  if(req.body.username == "a" && req.body.password == "b"){
      session=req.session;
      session.userid=req.body.username;
      console.log(req.session)
      res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  }
  else{
      res.send('Invalid username or password');
  }

})

app.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})