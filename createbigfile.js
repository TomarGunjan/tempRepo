const fs = require('fs')

for(let i=0;i<100000;i++){
    fs.writeFileSync('./fol1/big.txt',`Hello World ${i} \n`,{flag:'a'})
}
