const fs = require('fs')


// const book = {
// 	title: 'Ego is the enemies.',
// 	author: 'Ryan Dohn Holiday'
// }

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)

// // const parsedData = JSON.parse(bookJSON)

// // console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)


// const dataBuffer = fs.readFileSync('1-json.json')

// const dataJSON = dataBuffer.toString()

// // console.log(dataBuffer)
// // console.log(dataBuffer.toString())

// const data = JSON.parse(dataJSON)

// console.log(data.title)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()

const user = JSON.parse(dataJSON)

user.name = 'Gunther'

user.age = 55

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)


