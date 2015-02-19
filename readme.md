# keydown

[![NPM](https://nodei.co/npm/keydown.png)](https://nodei.co/npm/keydown/)

client side module for firing events when keys are pressed down. uses [vkey](https://github.com/chrisdickinson/vkey/blob/master/index.js) definitions

## demo

[![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=11538486)

## usage

```javascript
var keydown = require('keydown')

var kd = keydown(['<control>', 'a'])

kd.on('pressed', function(ev) {
  // control + a are both pressed right now
})
```


### options

these are the default global options. they can be used to stop the default behaviour on most of the keyboard shortcuts.
the default behaviour on vital shortcuts can't be disabled, e.g. the shortcut for a new tab.

```javascript
keydown({
  // caution when setting to true: it stops the propagation `stopPropagation` and prevents the defaults `preventDefault` on every `keydown` event.
  preventImmediate: false,
  // if `true`: runs `preventDefault` every time, a keydown rule is met. e.g. <meta> and 'S' are pressed.
  preventDefault: false,
  // if `true`: runs `stopPropagation` every time, a keydown rule is met. e.g. <meta> and 'S' are pressed.
  stopPropagation: false
});
```


### examples

```javascript
keydown(['<meta>', 'S']).on('pressed', function (e) {
  // stop default behaviour
  e.stopPropagation();
  e.preventDefault();
  // handle `save` shortcut e.g. on a mac
});
```


```javascript
keydown(['<control>', 'c']).on('pressed', function (e) {
  // handle `copy` shortcut e.g. on a windows machine
});
```
