# REST

A very brief overview on REST APIs:

A *RESTful architecture*, is an architectural style ([Fielding](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)) for providing resources to clients using a set of request verbs and resource locations. A REST API allows a client to access resources provided by a service.

## Concepts

The goal of REST APIs is to provide painless communication and interoperability between applications and services. REST APIs typically allow (often with some sort of authentication) a manipulation of the various types of entities associated with a service.

For example, if an API was created to enable an application to get information about user accounts, create new ones, update them, or delete them, the REST API could simply be defined by combining the following HTTP VERBS (GET, POST, PUT, DELETE), with resource paths, such as /users/.

| HTTP Verb	| Action             |	Example	       |Result  | 
| --------- | ------------------ | --------------- |------- |
| GET	    | Retrieve record(s) | GET /users/	   | Retrieves all users|
| POST	    | Create record	     | POST /users/	   | Creates a new user|
| PUT	    | Update record	     | PUT /users/6	   | Updates user 6|
| DELETE	| Delete record(s)	 | DELETE /users/1 | Deletes user with id 1|

Query parameters can be provided to provide additional information to the request. For example, `GET /users?country=France` would return a list of all users in France.

A [response](https://www.tutorialspoint.com/http/http_message_examples.htm) typically is composed of several parts: including headers, status code, and body.

Headers will may useful information, such as rate-limits quotas, or properties of the response, such as whether it is encoded or compressed in a particular format.

The [status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) will allow you to verify the success of an operation or indicate different types of failures. Additional error information may be sent via the request body.

The body will typically contain a JSON-formated object or an array. Some actions, such as deleting an object, may not return any data in the response body.

When sending a request, a JSON-formatted object is sent attached via the request body to the server.

### HTTP

![http](https://github.com/CSC-510/REST/blob/master/img/http.png?raw=true)


## Practicting with a REST Client

Let's see how a javascript client application can communicate with a server using a REST API call.

### Sending a GET request from inside the browser

In a browser, visit http://httpbin.org/

Open the developer's tool console (in your Web browser) and execute this code inside of the console.

*Note:* If you try this same code from a different page, you'll get a Cross-Origin Resource Sharing (CORS) error.

```Javascript
fetch("https://httpbin.org/anything")
    .then(data => data.json())
    .then(result => console.log(result));
```

This constructs as simple `GET` request to `https://httpbin.org/anything` and returns a copy of what was sent.

### Sending request using curl

Here are the same examples as above, but written to work with curl:

```bash
curl --request GET https://httpbin.org/anything
```

```bash
curl --request PUT -H "Content-Type: application/json" --data '{"coffee":1,"milk":1,"sugar":1,"chocolate":1}' https://httpbin.org/anything
```

```| {type: 'terminal'}
```


## Practice: Nonce

Nonce: Create a simple one-time sharing service

* `POST` an json object to `/share/`. Return an url with unique retrieval id
* `GET` the given `/:<id>`. Retrieve the object. Further updates should return an error.
* `DELETE` the given `/:<id>`.

You should be able to test your code using the following sequences of commands.

```bash
# Post content to server. Service returns retrieval link.
$ curl --request POST -H "Content-Type: application/json" --data '{"coffee":1,"milk":1,"sugar":1,"chocolate":1}' http://localhost:3000/share 
{"success":true,"link":"http://localhost:3000/pgiPc2"}

# Retrieve content
$ curl http://localhost:3000/pgiPc2 
{"coffee":1,"milk":1,"sugar":1,"chocolate":1}

# A second read will result in "Not Found" message.
$ curl http://localhost:3000/pgiPc2 
{"success":false,"error":404,"message":"Not Found"}

# Directly delete content
$ curl --request DELETE http://localhost:3000/pgiPc2 
```

The extend the following router to implement the endpoints.

```javascript | {type: 'file', path: '/Course/Pages/REST/router.js'}
const express = require('express');
const router = express.Router();

var requests = {};


router.get('/', (req, res) => res.send('Hello World!'))
router.post('/', function (req, res) {

    let id = Math.random().toString(36).substring(2);
    res.send(`Request ${id}. Received object. ${JSON.stringify(req.body)}`);

});

module.exports = router;
```

Install require packages with `npm install`.  

To start the server: `npm run start`.  
To stop the server: `npm run stop`.

When you've created your implementation, you

```| {type:'terminal'}
```
