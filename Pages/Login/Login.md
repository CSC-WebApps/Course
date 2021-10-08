# Using Cookies for Login

![img](imgs/cookie.png)

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

## Try it out


```| {type: 'terminal'}
```
<iframe id="serviceFrameSend" src="Login.md/env/port/3000/" width="800" height="600"  frameborder="1"></iframe>
<button onclick="window.frames['serviceFrameSend'].src+='';">⟳</button>

*Note:* You can refresh the app by clicking the <kbd>⟳</kbd> button.

```| {type: 'command', failed_when:"exitCode!=0"}
curl -s localhost:3000/secret
```