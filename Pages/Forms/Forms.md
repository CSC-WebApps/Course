# REST and Forms


```html |{type: 'playground'}
<!DOCTYPE html>
<html>
<body>

<button onclick="pressthebutton()">
    Click Get
</button>

<script>
function pressthebutton() {
    fetch('./Forms.md/env/port/3000/name')
    .then(response => response.text())
    .then(data => console.log(data));
}
</script>
</body>
<html>
```

### Users test...


```html | {type: 'playground'}
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

  <title>Static Landing Page</title>

</head>

<body>
  <!-- JS -->
  <script   src="https://code.jquery.com/jquery-3.6.0.min.js"   integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="   crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

  <!-- your content here... -->
  <div class="container">

    <div class="row p-5">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" onclick="getUsers()">Get Users</button>
            <button type="button" class="btn btn-secondary" onclick="getUser()">Get User</button>
            <button type="button" class="btn btn-secondary">Right</button>
        </div>
        <div id="console" class="bg-dark text-light">
        </div>
    </div>

  </div>
  <script>
      function getUsers() {
        fetch('./Forms.md/env/port/3000/users/')
            .then(response => response.text())
            .then(data => $('#console').append(data));
      }
      function getUser() {
        fetch('./Forms.md/env/port/3000/users/alice')
            .then(response => response.text())
            .then(data => $('#console').append(data));
      }

  </script>
</body>
</html>
```



```html |{type: 'playground'}
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>

<div class="w-50 mx-auto my-5">

    <h1 style="background-color:DodgerBlue;">Hello World</h1>

    <p style="background-color:Tomato;">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    </p>

    <form method="POST" action="./Forms.md/env/port/3000">
    <input type="text" name="username" />
    <input type="submit" />
    </form>

    <button onclick="onbtn()">
    Click Get
    </button>

</div>

<script>
function onbtn() {
fetch('./Forms.md/env/port/3000')
  .then(response => response.json())
  .then(data => console.log(data));
}
</script>

</body>
</html>

```

Type, `npm install`.
Run server with `node index.js`. Submit form... 

```| {type: 'terminal'}
```