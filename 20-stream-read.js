const {createReadStream} = require('fs')

const stream = createReadStream('./fol1/big.txt',{
    highWaterMark:90000,
    encoding:'utf-8'
})

// default 64kb
// last buffer - remainder
// highWaterMark - control size
//const stream = createReadStream('./fol1/big.txt',{highWaterMark:90000})
//const stream = createReadStream('./fol1/big.txt',{encoding:'utf8})

stream.on("data",(result)=>{
    console.log(result)
})

stream.on("error",(error)=>{
    console.log(error)
})