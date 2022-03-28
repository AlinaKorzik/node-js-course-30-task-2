const fs = require('fs')
const readline = require('readline')
const os = require('os')

const codeFile = fs.readFileSync('output.txt')
const str = codeFile.toString()
const arr = str.split(os.EOL)

arr.forEach((string) => {

    let data = Buffer.from(string, 'hex').toString()+os.EOL
    const options = { flag: 'a+' }
    fs.writeFileSync('decode.txt', data, options)
})

