/* eslint-disable jsdoc/require-description */
/* eslint-disable jsdoc/require-returns */
import Redline from 'redline'

console.log('Hello, world!')

const redlineInstance = new Redline()
redlineInstance.createInterface({
  input: process.stdin,
  output: process.stdout
})

redlineInstance.question('What is your name?', (name) => {
  console.log(`Hello ${name}`)
  redlineInstance.close()
})


