var Emitter = require('events').EventEmitter
var vkey = require('vkey')

var preventImmediate = false
var preventDefault = false
var stopPropagation = false

module.exports = function(keys, el) {

  function listen(keys, el) {

    if (typeof keys === 'string') keys = [keys]
    if (!el) el = window

    var emitter = new Emitter()
    emitter.pressed = {}

    el.addEventListener('blur', clearPressed)
    el.addEventListener('focus', clearPressed)

    el.addEventListener('keydown', function(ev) {
      if (preventImmediate) {
        ev.preventDefault()
        ev.stopPropagation()
      }
      var key = vkey[ev.keyCode]
      emitter.pressed[key] = true
      var allPressed = true
      keys.forEach(function(k) {
        if (emitter.pressed[k]) {
          if (preventDefault || preventImmediate) ev.preventDefault()
          if (stopPropagation || preventImmediate) ev.stopPropagation()
        } else {
          allPressed = false
        }
      })
      if (allPressed) {
        emitter.emit('pressed', ev)
        // this seems to be necessary as keyup doesn't always fire during combos :/
        clearPressed()
      }
    })

    el.addEventListener('keyup', function(ev) {
      delete emitter.pressed[vkey[ev.keyCode]]
    })

    function clearPressed() {
      emitter.pressed = {}
    }

    return emitter
  }

  if (!(keys instanceof  Array) && typeof  keys == 'object') {
    // save options
    preventImmediate = keys.preventImmediate
    preventDefault = keys.preventDefault
    stopPropagation = keys.stopPropagation
    return listen
  } else {
    return listen(keys, el)
  }

}
