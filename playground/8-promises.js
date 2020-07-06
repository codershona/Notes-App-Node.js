// const doWorkPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {

// 		// resolve([7, 4, 1])
// 		reject('Things wnet wrong!!!!')
// 		// reject('NEW ERROR!!!')
// 		// resolve([2, 3, 2])

// 	}, 2000)


// })



// doWorkPromise.then((result) => {

// 	console.log('Success!!!', result)


// }).catch((error) => {

// 	console.log('ERROR!!!', error)
	

// })

////// -------   method 2: ///////-----



const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b)

		}, 2000)
	})
}

// method 1:

// add(1, 2).then((sum) => {
 
//  console.log(sum)

//  add(sum, 5).then((sum2) => {
//  	console.log(sum2)

//  }).catch((e) => {
//  	console.log(e)
//  })

// }).catch((e) => {

// 	console.log(e)

// })



// method 2:

// add(1, 1).then((sum) => {

// 	console.log(sum)

// 	return add(sum, 4)

// }).then((sum2) => {

// 	console.log(sum2)

// }).catch((e) => {
// 	console.log(e)
// })


// method 3:

add(1, 7).then((sum) => {

	console.log(sum)

	return add(sum, 4)

}).then((sum2) => {

	console.log(sum2)

}).catch((e) => {
	console.log(e)
})

