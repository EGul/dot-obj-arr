#dot-obj-arr
Access object and array properties using dot path

##Usage
```js
var dot = require('dot-obj-arr');

var temp = {
  one: 'first',
  two: [
    'one',
    { one: 'second first' }  
  ]
}

dot(temp, 'two.[1].one') // second first
```

##Install
```
npm install temp-name-here/dot-obj-arr
```
