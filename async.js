const fs = require('fs')


// reading text asynchronously

fs.readFile('./text/read.txt', 'utf-8', (err,data) => {
    if(err){
        throw('error')
    }
    // console.log(data)

    // writting text asynchronously

    fs.writeFile('./text/read2.txt', data , 'utf-8', (error) => {
        if(error){
            throw Error('Error')
        }

    })

})

console.log('testing')