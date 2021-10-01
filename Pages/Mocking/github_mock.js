const nock = require('nock');

let data = require('./mock.json');

var mockService = nock("https://api.github.com")
    .persist() // This will persist mock interception for lifetime of program.
    .defaultReplyHeaders({
      'Content-Type': 'application/json',
    })    
    .get("/repos/testuser/Hello-World/issues")
    .reply(200, data.issueList );

