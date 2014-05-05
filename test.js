var keydown = require('./')

var kd = keydown(['<meta>', 'A'])

console.log([kd])

kd.on('pressed', function() {
  console.log('pressed')
})