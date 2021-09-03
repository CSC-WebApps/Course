const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({
    extended: true
}))

app.post('/submit-form', (req, res) => {
    const username = req.body.username
    console.log( username );
    res.redirect('#');
})

app.get('/', (req, res) => {
  res.send("hello")
})

app.get('/users/', (req, res) => {
  res.send(`hello users`);
})

app.get('/users/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})