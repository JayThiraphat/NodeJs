const util = require(`./modules/mymodules`) //นิยม
const getCurrentTime = require(`./modules/mymodules`).getCurrentTime
const number = 5000000

console.log(util.getCurrentTime())
console.log(getCurrentTime()) // or

console.log(util.add(50,100))

console.log(util.formatNumber(number))