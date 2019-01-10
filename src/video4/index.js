const log = require('../logger')

const State = require('crocks/State')
const Pair = require('crocks/Pair')
const Unit = require('crocks/Unit')

const { put } = State

// State s a
// (s -> (a, s))

/* initial
// putState :: s -> State s ()
const putState = state =>
  State(() => Pair(Unit(), state))

// Pair( (), "Grand Canyon" )
log(
  putState('Grand Canyon')
    .runWith('Evergreen')
)

// Grand Canyon
log(
  putState('Grand Canyon')
    .runWith('Evergreen')
    .snd()
)

// undefined
log(
  putState('Grand Canyon')
    .evalWith('Evergreen')
)

// Grand Canyon
log(
  putState('Grand Canyon')
    .execWith('Evergreen')
)
//*/

/* reset
// putState :: s -> State s ()
const putState = state =>
  State(() => Pair(Unit(), state))

// reset :: () -> State String ()
const reset = () =>
  putState('Grand Canyon')

// Grand Canyon
log(
  reset()
    .execWith('Evergreen')
)
//*/

//* put
// reset :: () -> State String ()
const reset = () =>
  put('Grand Canyon')

// Grand Canyon
log(
  reset()
    .execWith('Evergreen')
)

// undefined
log(
  reset()
    .evalWith('Evergreen')
)

// Pair( (), "Grand Canyon" )
log(
  reset()
    .runWith('Evergreen')
)
//*/
