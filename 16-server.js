const http = require('http')

const server = http.createServer((req, res)=>{
    console.log("send request")
    res.end("hello world")
})

server.listen(5001,()=>{
    console.log('listening on port 5001')
})