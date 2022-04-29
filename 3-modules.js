//node uses commonjs, every file is a module(by default)
//Modules - encapsulated code(only share minimum)

const {john,peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require("./6-alternative-flavor")
// console.log(data)
// sayHi(john)
// sayHi(peter)
// sayHi(`Vineeth`)

require("./7-mind-granade")