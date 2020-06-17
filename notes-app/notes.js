const fs = require('fs')
const chalk = require('chalk')


// const getNotes = function () {
  const getNotes = () => {
	return 'Your notes...'
}

// const addNote = function (title, body) {
  const addNote = (title, body) => {
  const notes = loadNotes()

  // const duplicateNotes = notes.filter(function (note) {
  // 	// return false
  // 	return note.title === title

  // })

   const duplicateNotes = notes.filter((note) => note.title === title)

  //  const duplicateNotes = notes.filter(function (note) {
  //   return note.title === title

  // })



  if (duplicateNotes.length === 0) {

  	notes.push({
  	title: title,
  	body: body

  }) 
    saveNotes(notes)
    // console.log('New note added perfect!')
    console.log(chalk.green.inverse('New note added perfect!'))


  } else {
  	// console.log('Notes title taken!')
    console.log(chalk.red.inverse('Notes title taken!'))

  }

  // notes.push({
  // 	title: title,
  // 	body: body

  // })


  // // console.log(notes)
  // saveNotes(notes)

}


// const removeNote =  function (title) {
  const removeNote = (title) => {
 // console.log(title)
 const notes = loadNotes()
 // const notesToKeep = notes.filter(function (note) {
 //  return note.title !== title

 // })

  const notesToKeep = notes.filter((note) => note.title !== title)


   if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Notes Removed Perect!'))
    saveNotes(notesToKeep)

   } else {
    console.log(chalk.red.inverse('No notes found!'))
   }

 // saveNotes(notesToKeep)

}


const listNotes = () => {
 
 const notes = loadNotes()

  console.log(chalk.inverse('Your Notes done!'))

   notes.forEach((note) => {
    console.log(note.title)
    // console.log(note.tilte)

   })

}



// const saveNotes = function (notes) {
  const saveNotes = (notes) => {
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json', dataJSON)

}



// const loadNotes = function () {
  const loadNotes = () => {
	try {

   const dataBuffer = fs.readFileSync('notes.json')
	const dataJSON = dataBuffer.toString()
	return JSON.parse(dataJSON)

	} catch (e) {
		return []

	}



	// const dataBuffer = fs.readFileSync('notes.json')
	// const dataJSON = dataBuffer.toString()
	// return JSON.parse(dataJSON)


}

// module.exports = getNotes

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
}