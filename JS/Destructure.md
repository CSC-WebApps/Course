# Destructure assignment

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js | {type: 'script'}
const [a, b, c] = [1,2,3];
console.log(a);

const {foo, bar} = {foo: 1, bar: 2}
console.log(foo);
```