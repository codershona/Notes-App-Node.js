const fs = require('fs')


const getNotes = function () {
	return 'Your notes...'
}

const addNote = function (title, body) {
  const notes = loadNotes()

  const duplicateNotes = notes.filter(function (note) {
  	// return false
  	return note.title === title

  })

  if (duplicateNotes.length === 0) {

  	notes.push({
  	title: title,
  	body: body

  }) 
    saveNotes(notes)
    console.log('New note added perfect!')


  } else {
  	console.log('Notes title taken!')

  }

  // notes.push({
  // 	title: title,
  // 	body: body

  // })


  // // console.log(notes)
  // saveNotes(notes)

}

const saveNotes = function (notes) {
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json', dataJSON)

}



const loadNotes = function () {
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
	addNote: addNote
}