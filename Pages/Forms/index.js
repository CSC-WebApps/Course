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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})