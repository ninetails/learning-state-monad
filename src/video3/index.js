const log = require('../logger')

const { get } = require('crocks/State')
const prop = require('crocks/Maybe/prop')
const option = require('crocks/pointfree/option')
const compose = require('crocks/helpers/compose')
const objOf = require('crocks/helpers/objOf')

// State s a
// (s -> (a, s))

const { burgers, tacos } = require('./data')

/* initial
// getBurgers :: State Object
const getBurgers =
  get()

// Pair( { burgers: 4 }, { burgers: 4 } )
log(
  getBurgers
    .runWith(burgers)
)

// { burgers: 4 }
log(
  getBurgers
    .runWith(burgers)
    .snd()
)

// { burgers: 4 }
log(
  getBurgers
    .runWith(burgers)
    .fst()
)
//*/

/* using prop
// getBurgers :: State Object (Maybe a)
const getBurgers =
  get()
    .map(prop('burgers'))

// Just 4
log(
  getBurgers
    .runWith(burgers)
    .fst()
)

// Nothing
log(
  getBurgers
    .runWith(tacos)
    .fst()
)

// { tacos: 10 }
log(
  getBurgers
    .runWith(tacos)
    .snd()
)

// Nothing
log(
  getBurgers
    .evalWith(tacos)
)

// Just 4
log(
  getBurgers
    .evalWith(burgers)
)
//*/

/* prop on get
// getBurgers :: State Object (Maybe a)
const getBurgers =
  get(prop('burgers'))

// Just 4
log(
  getBurgers
    .evalWith(burgers)
)

// Nothing
log(
  getBurgers
    .evalWith(tacos)
)
//*/

/* default value
// getBurgers :: State Object a
const getBurgers =
  get(prop('burgers'))
    .map(option(0))

// 4
log(
  getBurgers
    .evalWith(burgers)
)

// 0
log(
  getBurgers
    .evalWith(tacos)
)
//*/

//* default value
// defaultProp :: (String, a) -> Object -> b
const defaultProp = (key, def) =>
  compose(option(def), prop(key))

// getBurgers :: State Object a
const getBurgers =
  get(defaultProp('burgers', 0))

// 4
log(
  getBurgers
    .evalWith(burgers)
)

// 0
log(
  getBurgers
    .evalWith(tacos)
)

// burgersToTacos :: State Object
const burgersToTacos =
  getBurgers
    .map(objOf('tacos'))

// { tacos: 0 }
log(
  burgersToTacos
    .evalWith(tacos)
)

// { tacos: 4 }
log(
  burgersToTacos
    .evalWith(burgers)
)
//*/
