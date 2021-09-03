const express = require('express');
const router = express.Router();

var requests = {};


router.get('/', (req, res) => res.send('Hello World!'))
router.post('/share', function (req, res) {

    let id = Math.random().toString(36).substring(2);
    res.send(`Request ${id}. Received object. ${JSON.stringify(req.body)}`);

});

module.exports = router;
