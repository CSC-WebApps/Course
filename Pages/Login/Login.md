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

<script>
<button onclick="doOnce()">Only do something once</button>

<button onclick="clearOutputDoOnce()">
  Clear
</button>

<div>
  <code id="do-once"></code>
</div>
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


## Try it out


```| {type: 'terminal'}
```
<iframe id="serviceFrameSend" src="Login.md/env/port/3000/" width="800" height="600"  frameborder="1"></iframe>
<button onclick="window.frames['serviceFrameSend'].src+='';">⟳</button>

*Note:* You can refresh the app by clicking the <kbd>⟳</kbd> button.

```| {type: 'command', failed_when:"exitCode!=0"}
curl -s localhost:3000/secret
```