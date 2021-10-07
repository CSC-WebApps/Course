# Login

Type, `npm install`.
Run server with `node index.js`. Submit form... 

```| {type: 'terminal'}
```

```html |{type: 'playground'}
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <form action="/user" method="post">
        <h2>Login</h2>
        <div class="input-field">
            <input type="text" name="username" id="username" placeholder="Enter Username">
        </div>
        <div class="input-field">
            <input type="password" name="password" id="password" placeholder="Enter Password">
        </div>
        <input type="submit" value="LogIn">
    </form>
</body>
</html>
```