const log = require('../logger')

const State = require('crocks/State')
const Pair = require('crocks/Pair')
const Unit = require('crocks/Unit')

const mapProps = require('crocks/helpers/mapProps')

const { modify } = State

const { add } = require('../helpers')

// State s a
// (s -> (a, s))

const state =
  { bubbles: 42 }

/* initial
// modifyState :: (s -> s) -> State S ()
const modifyState = fn =>
  State(s => Pair(Unit(), fn(s)))

// State Function
log(
  modifyState(mapProps({ bubbles: add(1) }))
)

// undefined
log(
  modifyState(mapProps({ bubbles: add(1) }))
    .evalWith(state)
)

// { bubbles: 43 }
log(
  modifyState(mapProps({ bubbles: add(1) }))
    .execWith(state)
)
//*/

/* blowBubble
// modifyState :: (s -> s) -> State S ()
const modifyState = fn =>
  State(s => Pair(Unit(), fn(s)))

// blowBubble :: () -> State Object ()
const blowBubble = () =>
  modifyState(mapProps({ bubbles: add(1) }))

// { bubbles: 43 }
log(
  blowBubble()
    .execWith(state)
)
//*/

/* modify
// blowBubble :: () -> State Object ()
const blowBubble = () =>
  modify(mapProps({ bubbles: add(1) }))

// { bubbles: 43 }
log(
  blowBubble()
    .execWith(state)
)
//*/

//* refactoring
// blowBubbles :: Number -> State Object ()
const blowBubbles = n =>
  modify(mapProps({ bubbles: add(n) }))

// blowBubble :: () -> State Object ()
const blowBubble = () =>
  blowBubbles(1)

// { bubbles: 43 }
log(
  blowBubble()
    .execWith(state)
)

// undefined
log(
  blowBubble()
    .evalWith(state)
)

// burstBubbles :: Number -> State Object ()
const burstBubbles = n =>
  blowBubbles(-(n))

// { bubbles: 32 }
log(
  burstBubbles(10)
    .execWith(state)
)

// burstBubble :: Number -> State Object ()
const burstBubble = () =>
  burstBubbles(1)

// { bubbles: 41 }
log(
  burstBubble()
    .execWith(state)
)
//*/
