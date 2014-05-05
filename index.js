var Emitter = require('events').EventEmitter
var vkey = require('vkey')

module.exports = function(keys, el) {
  if (typeof keys === 'string') keys = [keys]
  if (!el) el = window

  var emitter = new Emitter()
  var pressed = {}
  
  el.addEventListener('blur', clearPressed)
  el.addEventListener('focus', clearPressed)
  
  el.addEventListener('keydown', function(ev) {
    var key = vkey[ev.keyCode]
    pressed[key] = true
    console.log([key, pressed, keys])
    var allPressed = true
    keys.forEach(function(k) {
      if (!pressed[k]) allPressed = false
    })
    if (allPressed) emitter.emit('pressed')
  })

  el.addEventListener('keyup', function(ev) {
    delete pressed[vkey[ev.keyCode]]
  })
  
  function clearPressed() {
    pressed = {}
  }
  
  return emitter
}
