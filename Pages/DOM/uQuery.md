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

1. Update the example to select the second id, and then the third id.  

   👀 _Observe the color of the anchor link change._

2. Find the paragraph tag. 

```
const links = document.getElementsByTagName('td');
```



## uQuery

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
<script src="./uQuery.md/env/files/uQuery.js"></script>
<script>
    u().first().append('<span>Hello</span>')
</script>

</body>
</html>
```


```js |{type: 'file', path: '/Course/Pages/DOM/uQuery.js'}
function u(selector) {

    this.element = document.getElementsByTagName(selector);

    this.first = () => {

        if( this.element.children.length > 0 )
        {
            this.element = this.element.children[0];
        }
        return this;
    }

    this.append = () => {
        let div = document.createElement("span");
        div.append("Hello");
        this.element.appendChild( div );
        this.element = div;        
        return this;
    }

    return this;
}
```