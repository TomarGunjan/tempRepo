const {readFileSync,writeFileSync} = require('fs')

file1=readFileSync("./fol1/file1.txt","utf-8")
console.log(file1)

file2=readFileSync("./fol1/file2.txt","utf-8")
console.log(file2)



writeFileSync("./fol1/fol2/file3.txt",`creating file 3 with content ${file1} & ${file2}`,{flag:'a'})