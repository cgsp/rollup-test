import add from './modules/moduleA.js'
import _ from 'lodash'
import Greeter from './modules/Greeter'
import './style.css'

console.log(_.concat([1, 2, 3, 4], 4, [5]))
console.log(add(1, 2))
const greeter = new Greeter('gsp')
greeter.greet()

export default { add, lodash: _ }
