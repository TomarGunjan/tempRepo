const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req)
    if(req.url==='/'){
        res.end("welcome to our homepage")
    }
    else if(req.url==="/about"){
        res.end("our little history")
    }
    else {res.end(
            `<h1>Oops</h1>
            <p>We cpuld not find what u r looking for<p>
            `
    )
    }
})

server.listen(5001)