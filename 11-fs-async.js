const {readFile, writeFile} = require('fs')

readFile("./fol1/file1.txt","utf-8",(error, result)=>{
    if (error) {
        console.log(error)
        return 
    }
    const first = result
    readFile("./fol1/file2.txt","utf-8",(error, result)=>{
        if (error) {
            console.log(error)
            return 
        }
        const second = result
        writeFile("./fol1/file4.txt",`here is async text ${first} and ${second}`,(error, result)=>{
            if (error){
                console.log(error)
                return 
            }
            console.log(result)
        })
    })
})