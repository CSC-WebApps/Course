# DOM

## Finding an element by id



```html |{type: 'playground'}
<!DOCTYPE html>
<html>

<body>
    <ul>
        <li><a id="first" href="#" >Link #1</a></li>
        <li><a id="second" href="#">Link #2</a></li>
        <li><a id="third" href="#">Link #3</a></li>
    </ul>
</body>

<script>
var element = document.getElementById("first");
element.style.color = "#ff7f50";
</script>
</html>
```



## uQuery




