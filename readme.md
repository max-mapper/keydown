# keydown

[![NPM](https://nodei.co/npm/keydown.png)](https://nodei.co/npm/keydown/)

client side module for firing events when keys are pressed down. uses [vkey](https://github.com/chrisdickinson/vkey/blob/master/index.js) definitions

## demo

[![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=11538486)

## usage

```js
var keydown = require('keydown')

var kd = keydown(['<control>', 'a'])

kd.on('pressed', function() {
  // control + a are both pressed right now
})
```
