const { dirname } = require('path')
const path = require('path')

console.log(path.sep)

const filePath = path.join('fol4','fol2','test.txt')
console.log(filePath)

console.log(path.resolve(__dirname, 'fol1','fol2'))