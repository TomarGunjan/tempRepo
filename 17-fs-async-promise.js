const {readFile, writeFile} = require('fs').promises

const start = async()=>{
    try{
        const first = await readFile('./fol1/file1.txt')
        const second = await readFile('./fol1/file2.txt')
        await writeFile('./fol1/promisFile.txt',`This is awesome ${first} and ${second}`,
        {flag:'a'})
    } catch(error){
        console.log(error)
    }
}

start()


// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async()=>{
   
//     try{
//         const first = await readFilePromise('./fol1/file1.txt')
//         const second = await readFilePromise('./fol1/file2.txt')
//         await writeFilePromise('./fol1/promisFile.txt',`This is awesome ${first} and ${second}`)
//     } catch(error){
//         console.log(error)
//     }
// }

// start()





//way 1 : this is what internally happens in promisifying
// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,"utf-8",(error, result)=>{
//             if (error){
//                 reject(error)
//             }
//             resolve(result)
//         })
//     })
// }

// const start = async()=>{
   
//     try{
//         const first = await getText('./fol1/file1.txt')
//         const second = await getText('./fol1/file2.txt')
//         console.log(`content of 2 files ${first} and ${second}`)
//     } catch(error){
//         console.log(error)
//     }
// }

// start()

// getText('./fol1/file.txt').then((value=>{
//     console.log(value)
// })).catch((error)=>{
//     console.log(error)
// })