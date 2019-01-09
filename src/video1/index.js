const State = require('crocks/State')
const Pair = require('crocks/Pair')

// State s a
// (s -> (a, s))

/*
// m :: State Number String
const m =
  State(state => Pair('value', state))

// 'State Function'
console.log("" + m)

// Pair('value', 45)
console.log("" + m.runWith(45))

// 'value'
console.log("" + m.runWith(45).fst())

// 45
console.log("" + m.runWith(45).snd())
//*/

/*
// m :: State Number
const m =
  State(state => Pair(state + 5, state))

// 50
console.log("" + m.runWith(45).fst())
// */

/*
// m :: State Number
const m =
  State(state => Pair(state, state + 5))

// 50
console.log("" + m.runWith(45).snd())
// */

// updateValue :: Number -> State Number
const updateValue = x =>
  State(s => Pair(s + x, s))

// 'State Function'
console.log("" + updateValue(10))

// Pair(55, 45)
console.log("" + updateValue(10).runWith(45))

// 55
console.log("" + updateValue(10).runWith(45).fst())

// 45
console.log("" + updateValue(10).runWith(45).snd())

// updateState :: Number -> State Number
const updateState = x =>
  State(s => Pair(s, s + x))

// 55
console.log("" + updateState(10).runWith(45).snd())

// 45
console.log("" + updateState(10).runWith(45).fst())
