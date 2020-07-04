const doWorkPromise = new Promise((resolve, reject) => {
	setTimeout(() => {

		// resolve([7, 4, 1])
		reject('Things wnet wrong!!!!')
		// reject('NEW ERROR!!!')
		// resolve([2, 3, 2])

	}, 2000)


})



doWorkPromise.then((result) => {

	console.log('Success!!!', result)


}).catch((error) => {

	console.log('ERROR!!!', error)
	

})