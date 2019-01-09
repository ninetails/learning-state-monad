const State = require('crocks/State')
const Pair = require('crocks/Pair')
const compose = require('crocks/helpers/compose')

const { get } = State

// State s a
// (s -> (a, s))

/* initial state
// state :: State Number
const state =
  State(s => Pair(s + 10, s))

// Pair( 33, 23 )
console.log('' + state.runWith(23))

// 33
console.log('' + state.runWith(23).fst())

// 23
console.log('' + state.runWith(23).snd())
//*/

/* starting
// getState :: () -> State s
const getState = () =>
  State(s => Pair(s, s))

// map :: State s a ~> (a -> b) -> state s b

// 23
console.log('' + getState().runWith(23).snd())

// 23
console.log('' + getState().runWith(23).fst())

// Pair( 23, 23 )
console.log('' + getState().runWith(23))
// */

/* using
const { add } = require('../helpers')

// getState :: () -> State s
const getState = () =>
  State(s => Pair(s, s))

// map :: State s a ~> (a -> b) -> state s b

// 33
console.log('' +
  getState()
    .map(add(10))
    .runWith(23)
    .fst()
)

// 10
console.log('' +
  getState()
    .map(add(10))
    .runWith(0)
    .fst()
)

// 0
console.log('' +
  getState()
    .map(add(10))
    .runWith(0)
    .snd()
)
//*/

/* with pluralize
const { add, pluralize } = require('../helpers')

// getState :: () -> State s
const getState = () =>
  State(s => Pair(s, s))

// makeAwesome :: Number ? String
const makeAwesome =
  pluralize('Awesome', 'Awesomes')

// 0 Awesomes
console.log('' +
  getState()
    .map(makeAwesome)
    .runWith(0)
    .fst()
)

// 1 Awesome
console.log('' +
  getState()
    .map(makeAwesome)
    .runWith(1)
    .fst()
)

// 100 Awesomes
console.log('' +
  getState()
    .map(makeAwesome)
    .runWith(100)
    .fst()
)

// 110 Awesomes
console.log('' +
  getState()
    .map(add(10))
    .map(makeAwesome)
    .runWith(100)
    .fst()
)

// flow :: Number -> String
const flow = compose(
  makeAwesome,
  add(10)
)

// 110 Awesomes
console.log('' +
  getState()
    .map(flow)
    .runWith(100)
    .fst()
)

// 100
console.log('' +
  getState()
    .map(flow)
    .runWith(100)
    .snd()
)

// -9
console.log('' +
  getState()
    .map(flow)
    .runWith(-9)
    .snd()
)

// 1 Awesome
console.log('' +
  getState()
    .map(flow)
    .runWith(-9)
    .fst()
)

// 1 Awesome
console.log('' +
  getState()
    .map(flow)
    .runWith(23)
    .fst()
)
//*/

//* using get
const { add, pluralize } = require('../helpers')

// makeAwesome :: Number ? String
const makeAwesome =
  pluralize('Awesome', 'Awesomes')

// flow :: Number -> String
const flow = compose(
  makeAwesome,
  add(10)
)

// 33 Awesome
console.log('' +
  get()
    .map(flow)
    .runWith(23)
    .fst()
)

// 23
console.log('' +
  get()
    .map(flow)
    .runWith(23)
    .snd()
)

// Pair( "33 Awesomes", 23 )
console.log('' +
  get()
    .map(flow)
    .runWith(23)
)
//*/
