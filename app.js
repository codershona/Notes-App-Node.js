// console.log('Wellcome to the class!')

// const fs = require('fs')

// const fileSystem = require('fs')

// fs.writeFileSync('note.text', 'This is node.js, this file is created by nodejs language.')

// fileSystem.writeFileSync('note.text', 'This is node.js.')

 //fs.appendFileSync('note.txt', ' I live in Canada.')

// Challenge: Append a message to notes.txt

// Use appendFileSync to append to the file
// Run the script
// Check your work by opening the file and viewing the appended text

// require('./utils.js')


// const name = 'John'

// const name = require('./utils.js')
// const firstName = require('./utils.js')
// const add = require('./utils.js')

// // console.log(firstName)
// const sum = add(4, -2)


// console.log(sum)

// Challenge: Define and use a function in a new file

// Create a new file called note.js

// Create get n

// const validator = require('validator')

// const chalk = require('chalk')

// const getNotes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

// console.log(chalk.green('Success!')

// const greenMsg = chalk.green('Success!')
// const greenMsg = chalk.green.bold('Success!')

// const greenMsg = chalk.red.inverse.bold('Error not fixs!')
// const greenMsg = chalk.blue.inverse.bold('Error not fixs!')

// console.log(greenMsg)

// console.log(validator.isEmail('john@test.com'))
// console.log(validator.isEmail('test.com'))
// console.log(validator.isURL('https://www.npmjs.com/package/validator'))
// console.log(validator.isURL('https/.npmjs.com/package/validator'))

// console.log(process.argv[2])

const chalk = require('chalk')

const yargs = require('yargs')

const getNotes = require('./notes.js')


// const command = process.argv[2]

// console.log(process.argv)

// if (command === 'add') {
// 	console.log('Adding note!')
// }
//  else if (command === 'remove') {

//  	console.log('Removing note!')

//  }

// Customize yargs version

yargs.version('1.1.0')

// Create add command

yargs.command({
	command: 'add',
	describe: 'Add a new notes',
	handler: function () {
		console.log('Adding a new note!')
	}

})

// Create remove command

yargs.command({
	command: 'remove',
	describe: 'Remove a notes in app',
	handler: function () {
		console.log('Removing the notes perfectly')
	}

})

// Create List Command

yargs.command({
	command: 'list',
	describe: 'List your notes created',
	handler: function () {
		console.log('Listing out all notes')
	}
})


// Create read command 

yargs.command({
	command: 'read',
	describe: 'Read a note!',
	handler: function () {
		console.log('Reading a note')
	}
})

// add, remove, read, list

console.log(yargs.argv)





