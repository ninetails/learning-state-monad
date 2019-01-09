const State = require('crocks/State')
const Pair = require('crocks/Pair')

module.exports = function log (thing) {
  if (thing.type) {
    console.log('' + thing)
  } else {
    console.log(thing)
  }
}
