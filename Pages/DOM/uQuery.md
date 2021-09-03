# DOM

## Finding an element by id, tags

We will be working with this html playground to perform a few tasks.

```html |{type: 'playground'}
<!DOCTYPE html>
<html>

<body>
    <ul>
        <li><a id="first" href="#" >Link #1</a></li>
        <li><a id="second" href="#">Link #2</a></li>
        <li><a id="third" href="#">Link #3</a></li>
    </ul>
    <p>
    </p>
<script>
    var element = document.getElementById("first");
    element.style.color = "#ff7f50";
</script>    
</body>
</html>
```

1. Update the example to select the second id, and then the third id. Observe the color of the anchor link change.

2. const links = document.getElementsByTagName('td');




## uQuery




