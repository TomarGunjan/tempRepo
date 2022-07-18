const http = require('http')
const {createReadStream} = require('fs')

http.createServer((req,res)=>{
    const stream = createReadStream('./fol1/big.txt','utf8')

    stream.on('open',()=>{
        stream.pipe(res)
    })
    stream.on('error',()=>{
        res.end(error)
    })
}).listen(5001)