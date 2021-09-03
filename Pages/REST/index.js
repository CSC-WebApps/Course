const express = require('express')
const app = express()
const port = 3000;

const router = require('./router');

// express configuration
app.use(express.json({type: '*/*'}));

app.use("/", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))