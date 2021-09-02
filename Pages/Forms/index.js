const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({
    extended: true
}))

app.post('/submit-form', (req, res) => {
    const username = req.body.username
    console.log( username );
    res.end()
})

app.get('/CSC-WebApps/Course/Pages/Forms/Forms.md/env/port/3000', (req, res) => {
  res.send("hello from long form")
})

app.get('/', (req, res) => {
  res.send("hello from root")
})

app.get('/CSC-WebApps/Course/Pages/Forms/Forms.md/env/port/3000/:name', (req, res) => {

  res.send(`hello ${req.params.name}`);

})


app.post('/CSC-WebApps/Course/Pages/Forms/Forms.md/env/port/3000', (req, res) => {
  const username = req.body.username
  console.log( username );
  res.end()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})